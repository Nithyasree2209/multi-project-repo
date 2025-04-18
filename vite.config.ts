import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
// import path from 'path'

export default defineConfig({
  base:"/multi-project-repo/",
  plugins: [ 
    tailwindcss(),
    react()
  ],
  // resolve: {
  //   alias: {
  //     '@': path.resolve('src'),
  //   },
  // },
  
})