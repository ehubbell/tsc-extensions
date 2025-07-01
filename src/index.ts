import { promises as fs } from 'fs';
import path from 'path';

async function formatExtensions(pathName) {
	const fileContent = await fs.readFile(pathName, 'utf8');

	const importRegex = /(import\s+.*?from\s+['"])([^'"]+)(['"])/g;

	let modifiedContent = fileContent.replace(importRegex, (match, beforePath, importPath, afterPath) => {
		if (importPath.startsWith('./') || importPath.startsWith('../')) {
			const hasExtension = path.extname(importPath) !== '';
			if (!hasExtension) return `${beforePath}${importPath}.d.ts${afterPath}`;
		}
		return match;
	});

	await fs.writeFile(pathName, modifiedContent, 'utf8');
}

export const runExtensions = (pathName = 'dist/index.d.ts'): any => {
	return {
		name: 'run-size',
		closeBundle: async () => {
			await formatExtensions(pathName);
			console.log(`${pathName} updated!`);
		},
	};
};

// Docs
