import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_33FpgxU4.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                          */

const $$Astro$6 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "E:/Web kurs/astrossr/src/components/BaseHead.astro", void 0);

const languages = {
  en: "English",
  pl: "Polish"
};
const defaultLang = "pl";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.about": "About"
  },
  pl: {
    "nav.home": "Strona główna",
    "nav.blog": "Blog",
    "nav.about": "O mnie"
  }
};
const routes = {
  en: {
    omnie: "about"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation = defaultLang !== l && routes[l] !== void 0 && routes[l][pathName] !== void 0;
    const translatedPath = hasTranslation ? "/" + routes[l][pathName] : path;
    return l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}
function getRouteFromUrl(url) {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();
  if (path === void 0) {
    return void 0;
  }
  const currentLang = getLangFromUrl(url);
  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== void 0 ? route[path] : void 0;
  }
  const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };
  const reversedKey = getKeyByValue(routes[currentLang], path);
  if (reversedKey !== void 0) {
    return reversedKey;
  }
  return void 0;
}

const $$Astro$5 = createAstro();
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "E:/Web kurs/astrossr/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "Astro Blog";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const route = getRouteFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2><a${addAttribute(translatePath("/"), "href")} data-astro-cid-3ef6ksr2>${SITE_TITLE}</a></h2> <div class="internal-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": translatePath("/"), "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.home")}` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": translatePath("/blog/"), "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.blog")}` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": translatePath(`/${route ? route : "omnie"}`, lang), "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${t("nav.about")}` })} </div> </nav> </header> `;
}, "E:/Web kurs/astrossr/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$LanguagePicker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  const lang = getLangFromUrl(Astro2.url);
  const route = getRouteFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  return renderTemplate`${maybeRenderHead()}<ul> ${Object.entries(languages).map(([lang2, label]) => renderTemplate`<li> <a${addAttribute(translatePath(`/${route ? route : ""}`, lang2), "href")}>${label}</a> </li>`)} </ul>`;
}, "E:/Web kurs/astrossr/src/components/LanguagePicker.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Your name here. All rights reserved.
<div class="social-links" data-astro-cid-sz7xmlte> <a href="https://m.webtoo.ls/@astro" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Follow Astro on Mastodon</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/mastodon" data-astro-cid-sz7xmlte><path fill="currentColor" d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" data-astro-cid-sz7xmlte></path></svg> </a> <a href="https://twitter.com/astrodotbuild" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Follow Astro on Twitter</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/twitter" data-astro-cid-sz7xmlte><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" data-astro-cid-sz7xmlte></path></svg> </a> <a href="https://github.com/withastro/astro" target="_blank" data-astro-cid-sz7xmlte> <span class="sr-only" data-astro-cid-sz7xmlte>Go to Astro's GitHub repo</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/github" data-astro-cid-sz7xmlte><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-sz7xmlte></path></svg> </a> </div> ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, { "data-astro-cid-sz7xmlte": true })} </footer> `;
}, "E:/Web kurs/astrossr/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$404$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$404$1;
  return renderTemplate`<html lang="pl"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>404</h1> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/404.astro", void 0);

const $$file$1 = "E:/Web kurs/astrossr/src/pages/404.astro";
const $$url$1 = "/404";

const _404$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>404</h1> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/en/404.astro", void 0);

const $$file = "E:/Web kurs/astrossr/src/pages/en/404.astro";
const $$url = "/en/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE as S, _404$1 as _, $$Header as a, $$Footer as b, SITE_DESCRIPTION as c, _404 as d, getLangFromUrl as g, useTranslatedPath as u };
