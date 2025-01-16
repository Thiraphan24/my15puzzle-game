import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ตั้งค่า output directory สำหรับ production build
  },
  base: '/', // ปรับ base path ในกรณีที่ใช้โดเมนหรือ subdirectory อื่น ๆ
})
