import fs from 'fs-extra';
import path from 'path';

const args = process.argv.slice(2);
const pathName = args[args.indexOf('--path') + 1] || 'dist/index.d.ts';

async function formatExtensions(pathName) {
	const originalContent = await fs.promises.readFile(pathName, 'utf8');
	const exportRegex = /(export\s+.*?from\s)/g;
	const modifiedExport = originalContent.replace(exportRegex, `export type * from `);
	await fs.promises.writeFile(pathName, modifiedExport, 'utf8');

	const updatedContent = await fs.promises.readFile(pathName, 'utf8');
	const pathRegex = /(export\s+.*?from\s+['"])([^'"]+)(['"])/g;
	const modifiedPaths = updatedContent.replace(pathRegex, (match, beforePath, matchedPath, afterPath) => {
		if (matchedPath.startsWith('./') || matchedPath.startsWith('../')) {
			const hasExtension = path.extname(matchedPath) !== '';
			if (!hasExtension) return `${beforePath}${matchedPath}.d.ts${afterPath}`;
		}
		return match;
	});
	await fs.promises.writeFile(pathName, modifiedPaths, 'utf8');
}

formatExtensions(pathName);

// Docs
