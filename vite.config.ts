import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/portfolio/', // Adjust based on your deployment
  optimizeDeps: {
    include: ['react', 'react-dom'], // Add dependencies for pre-bundling
  },
});
