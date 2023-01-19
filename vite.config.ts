import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/products' :'https://funkos-5vkejquua-danipv54.vercel.app/products'
    }
  }
})
