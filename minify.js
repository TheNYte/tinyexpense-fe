import {readFile, writeFile} from 'node:fs/promises';

import fg from 'fast-glob';
import {minify} from 'html-minifier-terser';
import {green} from 'kolorist';

const filesToMinify = await fg('dist/client/**/*.html');

await Promise.all(
  filesToMinify.map(async (file) => {
    const html = await readFile(file, 'utf8');
    const minifiedHTML = await minify(html, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeComments: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      sortAttributes: true,
      sortClassName: true,
    });
    return writeFile(file, minifiedHTML, 'utf8');
  }),
);

console.log(`${green(`✓`)} ${filesToMinify.length} HTML documents minified.`);
