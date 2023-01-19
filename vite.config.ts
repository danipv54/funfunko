import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/products' :'https://funkos-api-vrkk-ma9p7othf-danipv54.vercel.app'
    }
  }
})
