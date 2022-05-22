## Nextjs + Typescript + Tailwind Template

Just a template to copy over to new projects

```bash
npx create-next-app -e https://github.com/juancortelezzi/next-starter next-starter

# or

yarn create next-app -e https://github.com/juancortelezzi/next-starter next-starter

# or

pnpm create next-app -e https://github.com/juancortelezzi/next-starter next-starter
```


```
<w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Parsing of /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/@contentlayer+core@0.2.5/node_modules/@contentlayer/core/dist/getConfig/index.js for build dependencies failed at 'import(`file://${modulePath}?x=${new Date()}`)'.
<w> Build dependencies behind this expression are ignored and might cause incorrect cache invalidation.
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Can't resolve 'markdown-wasm/dist/markdown.node.js' in '/home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/@contentlayer+core@0.2.5/node_modules/@contentlayer/core/dist/markdown'
<w> while resolving 'markdown-wasm/dist/markdown.node.js' in /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/@contentlayer+core@0.2.5/node_modules/@contentlayer/core/dist/markdown as file
<w>  at resolve esm file markdown-wasm/dist/markdown.node.js
<w>  at file dependencies /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/@contentlayer+core@0.2.5/node_modules/@contentlayer/core/dist/markdown/markdown.js
<w>  at file /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/@contentlayer+core@0.2.5/node_modules/@contentlayer/core/dist/markdown/markdown.js
<w>  at resolve esm file ./markdown/markdown.js
<w>  at file dependencies /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/@contentlayer+core@0.2.5/node_modules/@contentlayer/core/dist/index.js
<w>  at file /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/@contentlayer+core@0.2.5/node_modules/@contentlayer/core/dist/index.js
<w>  at resolve esm file @contentlayer/core
<w>  at file dependencies /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/next-contentlayer@0.2.5_2mgcgz5qhsdxw4fgpqzqeafmkq/node_modules/next-contentlayer/dist/plugin.js
<w>  at file /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/next-contentlayer@0.2.5_2mgcgz5qhsdxw4fgpqzqeafmkq/node_modules/next-contentlayer/dist/plugin.js
<w>  at resolve esm file ./plugin.js
<w>  at file dependencies /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/next-contentlayer@0.2.5_2mgcgz5qhsdxw4fgpqzqeafmkq/node_modules/next-contentlayer/dist/index.js
<w>  at file /home/wiz/Documents/Web-programmes/frontend-test/node_modules/.pnpm/next-contentlayer@0.2.5_2mgcgz5qhsdxw4fgpqzqeafmkq/node_modules/next-contentlayer/dist/index.js
<w>  at resolve esm file next-contentlayer
<w>  at file dependencies /home/wiz/Documents/Web-programmes/frontend-test/next.config.mjs
<w>  at file /home/wiz/Documents/Web-programmes/frontend-test/next.config.mjs
<w>  at resolve commonjs /home/wiz/Documents/Web-programmes/frontend-test/next.config.mjs
```
