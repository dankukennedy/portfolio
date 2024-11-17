import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Adjust based on your deployment
  build: {
    rollupOptions: {
      input: './index.html', // Explicitly set the entry point
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Add dependencies for pre-bundling
  },
});
