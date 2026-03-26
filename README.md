# 데이터 마트 & 데이터 웨어하우스 개발자 포트폴리오 웹사이트

이 저장소는 데이터 마트 및 데이터 웨어하우스 개발자 포트폴리오 목적의 정적 웹사이트를 포함합니다.

## 포함된 파일

- `index.html` : 메인 포트폴리오 페이지
- `styles.css` : 기본 스타일

## 개발 실행

1. 로컬 서버 실행 (예: Python):
   - `python3 -m http.server 8000`
2. 브라우저에서 `http://localhost:8000` 열기

## 프로젝트 작성 가이드

- `index.html` 내 `소개`, `스킬`, `프로젝트`, `연락처` 섹션을 기반으로 내용 교체
- `styles.css`를 수정하여 브랜드 컬러, 글꼴, 레이아웃 커스터마이징

---

## 이력서/포트폴리오 콘텐츠 예시

- 데이터 파이프라인 설계 사례 (ETL/ELT, Airflow, dbt, Kafka)
- DWH 모델링(스타/스노우플레이크, 차원 테이블)
- 시스템 성능 최적화(Tune, 파티셔닝, 분산 저장)
- 데이터 거버넌스/품질 및 모니터링 계획

## 기여

진행 중인 개선 항목:
- 프로젝트별 스크린샷 및 도표 추가
- GitHub Pages 배포 설정
- 다국어(한국어/영어) 지원
- Custom Domain + HTTPS
- GA4/GTAG 분석 추가
- 페이지 컴포넌트 분리 + JS 애니메이션

## Custom Domain + HTTPS

1. 저장소 루트에 `CNAME` 파일 추가 (예: `your-custom-domain.com`).
2. GitHub > Settings > Pages > Custom domain에 도메인 추가.
3. DNS 공급자에서 `A` 레코드, `CNAME` 레코드 설정 등 지침에 따라 설정.
4. HTTPS 자동 인증서 발급 확인 후 `Enforce HTTPS` 체크.

## Google Analytics 4 (GA4 / GTAG)

1. `index.html` 헤더에 GA4 스크립트 추가:
   - `G-XXXXXXXXXX`을 실제 측정 ID로 변경.
2. 트래픽, 이벤트, 사용자 행동 분석을 GitHub Pages에서 확인.

## 페이지 컴포넌트 분리 + JS 애니메이션

- `script.js`에서 인터섹션 옵저버를 통해 섹션 진입 시 fade-in 애니메이션 구현.
- `styles.css`에 `.hidden-section`, `.visible` 클래스를 추가.
- 링크 스크롤 동작을 부드럽게 처리.

이 저장소는 `.github/workflows/pages.yml`을 사용해 `main` 브랜치 푸시 시 자동으로 `gh-pages` 브랜치로 배포됩니다.

1. 파일 생성 완료: `.github/workflows/pages.yml`
2. 리포지토리 설정 -> Pages -> 배포 브랜치: `gh-pages` 선택
3. 사이트 URL: `https://<your-github-username>.github.io/<repository-name>/`
4. 필요 시 `index.html` 내 `og:url`, `canonical`, `twitter:image` 값을 실제 URL로 바꿔주세요.

### 수동 배포 (테스트)

- 로컬에서 실행:
  - `python3 -m http.server 8000`
  - `http://localhost:8000` 방문

- GitHub에 변경 푸시:
  - `git add .`
  - `git commit -m "Add GitHub Pages deploy workflow and SEO metadata"`
  - `git push origin main`

- Actions 탭에서 `Deploy static files to GitHub Pages`가 성공해야 합니다.

