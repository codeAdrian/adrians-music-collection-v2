import preprocess from 'svelte-preprocess';
import path from 'path';

import vercel from '@sveltejs/adapter-vercel';
import fs from 'fs';

const mediaQueries = fs.readFileSync('./src/styles/media.pcss').toString();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  compilerOptions: {
    hydratable: true,
  },
  preprocess: preprocess({
    postcss: {
      prependData: mediaQueries,
    },
  }),
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel(),
    vite: {
      build: {
        minify: 'terser',
      },
      hydratable: true,
      resolve: {
        alias: {
          src: path.resolve('./src'),
        },
      },
    },
  },
};

export default config;
