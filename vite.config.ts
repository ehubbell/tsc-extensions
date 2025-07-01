import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			sourcemap: mode !== 'production',
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				name: 'mylib',
				formats: ['es', 'cjs', 'umd', 'iife'],
				fileName: format => `index.${format}.js`,
			},
		},
		plugins: [],
	};
});
