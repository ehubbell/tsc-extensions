import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			sourcemap: mode !== 'production',
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				name: 'Extensions',
				formats: ['es', 'cjs'],
				fileName: (format, entryName) => `${entryName}.${format}.js`,
			},
			rollupOptions: {
				external: [
					'node:fs',
					'node:stream',
					'node:zlib',
					'node:util',
					'constants',
					'path',
					'stream',
					'fs',
					'util',
					'assert',
				],
				output: {
					banner: '#!/usr/bin/env node',
				},
				plugins: [peerDepsExternal()],
			},
		},
		plugins: [],
	};
});
