const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
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
