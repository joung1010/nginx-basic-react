# React + Nginx 배포 테스트 앱

이 프로젝트는 React 앱을 nginx로 배포하는 방법을 보여주는 테스트 프로젝트입니다.

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm start
```

### 3. nginx 배포
```bash
./deploy.sh
```

## 📦 배포 방법

### Docker를 사용한 배포 (권장)

1. **자동 배포**
   ```bash
   ./deploy.sh
   ```

2. **수동 배포**
   ```bash
   # React 앱 빌드
   npm run build
   
   # Docker 컨테이너 시작
   docker compose up -d --build
   ```

3. **배포 확인**
   - 브라우저에서 `http://localhost:8080` 접속

### 수동 nginx 배포

1. **React 앱 빌드**
   ```bash
   npm run build
   ```

2. **nginx 설정**
   - `nginx.conf` 파일을 nginx 설정 디렉토리에 복사
   - `build/` 폴더의 내용을 nginx 웹 루트 디렉토리에 복사

## 🐳 Docker 명령어

```bash
# 컨테이너 상태 확인
docker compose ps

# 로그 확인
docker compose logs -f

# 컨테이너 중지
docker compose down

# 컨테이너 재시작
docker compose restart
```

## 📁 프로젝트 구조

```
basic-react/
├── src/                    # React 소스 코드
├── public/                 # 정적 파일
├── build/                  # 빌드된 파일 (npm run build 후 생성)
├── nginx.conf             # nginx 설정 파일
├── Dockerfile             # Docker 이미지 설정
├── docker-compose.yml     # Docker Compose 설정
├── deploy.sh              # 배포 스크립트
└── package.json           # 프로젝트 의존성
```

## 🔧 nginx 설정 특징

- **SPA 지원**: React Router를 위한 fallback 설정
- **정적 파일 캐싱**: JS, CSS, 이미지 파일 최적화
- **gzip 압축**: 전송 크기 최적화
- **보안 헤더**: XSS, CSRF 등 보안 강화

## 🌐 접속 정보

- **개발 서버**: http://localhost:3000
- **nginx 배포**: http://localhost:8080

## 📝 추가 정보

- React 앱은 `npm run build` 명령으로 빌드됩니다
- 빌드된 파일은 `build/` 폴더에 생성됩니다
- nginx는 포트 8080에서 서비스를 제공합니다
- Docker 컨테이너는 자동으로 재시작됩니다

## 🚨 문제 해결

### 포트 충돌
```bash
# 사용 중인 포트 확인
lsof -i :8080

# 다른 포트 사용
docker-compose up -d --build -p 8081
```

### 권한 문제
```bash
# 배포 스크립트 실행 권한 부여
chmod +x deploy.sh
```

### Docker 문제
```bash
# Docker 서비스 상태 확인
docker --version
docker compose version
```
