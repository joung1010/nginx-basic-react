#!/bin/bash

echo "🚀 React 앱 배포 시작..."

# 기존 컨테이너 중지 및 제거
echo "📦 기존 컨테이너 정리 중..."
docker compose down

# React 앱 빌드
echo "🔨 React 앱 빌드 중..."
npm run build

# Docker 이미지 빌드 및 실행
echo "🐳 Docker 컨테이너 시작 중..."
docker compose up -d --build

echo "✅ 배포 완료!"
echo "🌐 http://localhost:8080 에서 앱을 확인하세요."
echo ""
echo "📋 유용한 명령어:"
echo "  - 로그 확인: docker-compose logs -f"
echo "  - 컨테이너 중지: docker-compose down"
echo "  - 컨테이너 재시작: docker-compose restart"
