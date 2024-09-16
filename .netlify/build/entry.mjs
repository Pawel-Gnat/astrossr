import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CktBVsOk.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_kg9xBNcY.mjs');
const _page1 = () => import('./chunks/404_BfqIpIX9.mjs');
const _page2 = () => import('./chunks/index_CK4nlXQj.mjs');
const _page3 = () => import('./chunks/_.._RYZnSMGV.mjs');
const _page4 = () => import('./chunks/404_CHBCLsCY.mjs');
const _page5 = () => import('./chunks/about_DCB4BMer.mjs');
const _page6 = () => import('./chunks/index_BoX_ePA0.mjs');
const _page7 = () => import('./chunks/_.._gzCeQuvw.mjs');
const _page8 = () => import('./chunks/index_UKDdwPYF.mjs');
const _page9 = () => import('./chunks/index_DSj8Qarx.mjs');
const _page10 = () => import('./chunks/omnie_ftvsuzIS.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/en/404.astro", _page4],
    ["src/pages/en/about.astro", _page5],
    ["src/pages/en/blog/index.astro", _page6],
    ["src/pages/en/blog/[...slug].astro", _page7],
    ["src/pages/index.astro", _page8],
    ["src/pages/en/index.astro", _page9],
    ["src/pages/omnie.astro", _page10]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "ca65fcc5-5470-4933-ae27-9f7c5fac0264"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
