import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import dts from 'vite-plugin-dts';

const external = () => {
  const packages = (pkg || {}) as { dependencies: Record<string, string>; peerDependencies: Record<string, string> };

  return [...Object.keys(packages.dependencies || {}), ...Object.keys(packages.peerDependencies || {})];
};

export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      include: ['lib/**/*'],
      tsconfigPath: './tsconfig.json',
    }),
  ],
  build: {
    lib: {
      entry: 'lib/index.ts',
      name: 'Grid',
      formats: ['es', 'umd'],
      fileName: (format) => `grid.${format}.js`,
    },
    rollupOptions: {
      external: external(),
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
  },
});
