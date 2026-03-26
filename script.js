document.addEventListener('DOMContentLoaded', () => {
  // 섹션 애니메이션 인터섹션 옵저버
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section').forEach((section) => {
    section.classList.add('hidden-section');
    observer.observe(section);
  });

  // 스무스 스크롤
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 모바일 메뉴 토글
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // 다크/라이트 테마 토글
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  const setTheme = (mode) => {
    if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
      themeToggle.textContent = '🌙';
    } else {
      root.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    }
    localStorage.setItem('theme', mode);
  };

  setTheme(savedTheme || 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
});
