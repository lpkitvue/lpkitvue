import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';

const external = () => {
  const packages = (pkg || {}) as { dependencies: Record<string, string>; peerDependencies: Record<string, string> };

  return [...Object.keys(packages.dependencies || {}), ...Object.keys(packages.peerDependencies || {})];
};

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    dedupe: ['vue'],
  },
  optimizeDeps: {
    include: ['vue'],
  },
});
