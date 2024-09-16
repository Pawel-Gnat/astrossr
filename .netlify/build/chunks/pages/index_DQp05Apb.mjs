import { c as createComponent, r as renderTemplate, g as renderComponent, h as renderHead, d as addAttribute, e as createAstro, u as unescapeHTML } from '../astro_33FpgxU4.mjs';
import 'kleur/colors';
import 'cssesc';
import { g as getLangFromUrl, u as useTranslatedPath, $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE, c as SITE_DESCRIPTION } from './404_Biuuado4.mjs';
/* empty css                          */
/* empty css                          */
import 'clsx';
import { marked } from 'marked';

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${"b3d770ff6f59983b22594f18cc2794"}`
    },
    body: JSON.stringify({
      query: `{
			allBlogpages {
				h1(locale: pl)
				img {
					alt(locale: pl)
					url
				}
				slot(locale: pl, markdown: true)
			}
		}
      `
    })
  });
  const json = await response.json();
  const data = json.data.allBlogpages;
  return renderTemplate`<html lang="pl" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${data.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(translatePath(`/blog/${post.h1}/`), "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.img.url, "src")}${addAttribute(post.img.alt, "alt")} data-astro-cid-5tznm7mj> <h2 class="title" data-astro-cid-5tznm7mj>${post.h1}</h2> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/blog/index.astro", void 0);
const $$file$3 = "E:/Web kurs/astrossr/src/pages/blog/index.astro";
const $$url$3 = "/blog";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${"b3d770ff6f59983b22594f18cc2794"}`
    },
    body: JSON.stringify({
      query: `{
			allBlogpages {
				h1(locale: en)
				img {
					alt(locale: en)
					url
				}
				slot(locale: en, markdown: true)
			}
		}
      `
    })
  });
  const json = await response.json();
  const data = json.data.allBlogpages;
  return renderTemplate`<html lang="en" data-astro-cid-s63ypivo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-s63ypivo": true })}${renderHead()}</head> <body data-astro-cid-s63ypivo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-s63ypivo": true })} <main data-astro-cid-s63ypivo> <section data-astro-cid-s63ypivo> <ul data-astro-cid-s63ypivo> ${data.map((post) => renderTemplate`<li data-astro-cid-s63ypivo> <a${addAttribute(translatePath(`/blog/${post.h1}/`), "href")} data-astro-cid-s63ypivo> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.img.url, "src")}${addAttribute(post.img.alt, "alt")} data-astro-cid-s63ypivo> <h2 class="title" data-astro-cid-s63ypivo>${post.h1}</h2> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-s63ypivo": true })} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/en/blog/index.astro", void 0);
const $$file$2 = "E:/Web kurs/astrossr/src/pages/en/blog/index.astro";
const $$url$2 = "/en/blog";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${"b3d770ff6f59983b22594f18cc2794"}`
    },
    body: JSON.stringify({
      query: `{
			homepage {
				slot(locale: pl, markdown: true)
				h1(locale: pl)
			}
		}
      `
    })
  });
  const json = await response.json();
  const data = json.data.homepage;
  const content = marked.parse(data.slot);
  return renderTemplate`<html lang="pl"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>🧑‍🚀 ${data.h1}</h1> <div>${unescapeHTML(content)}</div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/index.astro", void 0);
const $$file$1 = "E:/Web kurs/astrossr/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${"b3d770ff6f59983b22594f18cc2794"}`
    },
    body: JSON.stringify({
      query: `{
			homepage {
				slot(locale: en, markdown: true)
				h1(locale: en)
			}
		}
      `
    })
  });
  const json = await response.json();
  const data = json.data.homepage;
  const content = marked.parse(data.slot);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>🧑‍🚀 ${data.h1}</h1> <div>${unescapeHTML(content)}</div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/en/index.astro", void 0);
const $$file = "E:/Web kurs/astrossr/src/pages/en/index.astro";
const $$url = "/en";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
