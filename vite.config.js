import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build',  // CRA와 동일한 출력 디렉토리 유지
    sourcemap: true
  },
  // CRA와의 호환성을 위한 설정
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
