#!/bin/bash

echo "GitHub Pages 배포 상태 확인 중..."

# 워크플로 상태 확인
echo "워크플로 실행 상태:"
gh run list --workflow="Deploy static files to GitHub Pages" --limit=1

# URL 확인
echo ""
echo "배포 URL 확인:"
URL="https://daesikkong.github.io/homepage/"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

if [ "$HTTP_CODE" -eq 200 ]; then
    echo "✅ 배포 성공! URL: $URL"
    echo "공유 링크: $URL"
else
    echo "❌ 배포 실패 또는 아직 반영되지 않음 (HTTP $HTTP_CODE)"
    echo "GitHub Actions 로그를 확인하세요."
fi

echo ""
echo "수동 확인: GitHub 리포지토리 → Actions → Deploy 워크플로 → 최신 실행 → View details"