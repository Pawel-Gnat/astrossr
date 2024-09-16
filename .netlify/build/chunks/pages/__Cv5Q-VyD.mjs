import { c as createComponent, r as renderTemplate, g as renderComponent, h as renderHead, d as addAttribute, u as unescapeHTML, e as createAstro } from '../astro_33FpgxU4.mjs';
import 'kleur/colors';
import 'cssesc';
import { marked } from 'marked';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './404_Biuuado4.mjs';
/* empty css                           */
/* empty css                           */

const $$Astro$1 = createAstro();
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
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
						_createdAt
					}
				}
			`
    })
  });
  const json = await response.json();
  const data = json.data.allBlogpages;
  const { slug } = Astro2.params;
  const page = data.find((page2) => page2.h1 === slug);
  if (!page)
    return Astro2.redirect("/404");
  const { slot, h1, _createdAt, img } = page;
  const content = marked.parse(slot);
  return renderTemplate`<html lang="pl" data-astro-cid-7jjqptxk> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": h1, "description": h1, "data-astro-cid-7jjqptxk": true })}${renderHead()}</head> <body data-astro-cid-7jjqptxk> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-7jjqptxk": true })} <main data-astro-cid-7jjqptxk> <article data-astro-cid-7jjqptxk> <div class="hero-image" data-astro-cid-7jjqptxk> ${img.url && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(img.url, "src")}${addAttribute(img.alt, "alt")} data-astro-cid-7jjqptxk>`} </div> <div class="prose" data-astro-cid-7jjqptxk> <div class="title" data-astro-cid-7jjqptxk> <div class="date" data-astro-cid-7jjqptxk> ${_createdAt && renderTemplate`<div class="last-updated-on" data-astro-cid-7jjqptxk> ${new Date(_createdAt).toLocaleString().split(",")[0]} </div>`} </div> <h1 data-astro-cid-7jjqptxk>${h1}</h1> <hr data-astro-cid-7jjqptxk> </div> <div data-astro-cid-7jjqptxk>${unescapeHTML(content)}</div> </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-7jjqptxk": true })} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/blog/[...slug].astro", void 0);
const $$file$1 = "E:/Web kurs/astrossr/src/pages/blog/[...slug].astro";
const $$url$1 = "/blog/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
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
						_createdAt
					}
				}
			`
    })
  });
  const json = await response.json();
  const data = json.data.allBlogpages;
  const { slug } = Astro2.params;
  const page = data.find((page2) => page2.h1 === slug);
  if (!page)
    return Astro2.redirect("/404");
  const { slot, h1, _createdAt, img } = page;
  const content = marked.parse(slot);
  return renderTemplate`<html lang="en" data-astro-cid-bnuvcjva> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": h1, "description": h1, "data-astro-cid-bnuvcjva": true })}${renderHead()}</head> <body data-astro-cid-bnuvcjva> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bnuvcjva": true })} <main data-astro-cid-bnuvcjva> <article data-astro-cid-bnuvcjva> <div class="hero-image" data-astro-cid-bnuvcjva> ${img.url && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(img.url, "src")}${addAttribute(img.alt, "alt")} data-astro-cid-bnuvcjva>`} </div> <div class="prose" data-astro-cid-bnuvcjva> <div class="title" data-astro-cid-bnuvcjva> <div class="date" data-astro-cid-bnuvcjva> ${_createdAt && renderTemplate`<div class="last-updated-on" data-astro-cid-bnuvcjva> ${new Date(_createdAt).toLocaleString().split(",")[0]} </div>`} </div> <h1 data-astro-cid-bnuvcjva>${h1}</h1> <hr data-astro-cid-bnuvcjva> </div> <div data-astro-cid-bnuvcjva>${unescapeHTML(content)}</div> </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bnuvcjva": true })} </body></html>`;
}, "E:/Web kurs/astrossr/src/pages/en/blog/[...slug].astro", void 0);
const $$file = "E:/Web kurs/astrossr/src/pages/en/blog/[...slug].astro";
const $$url = "/en/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____slug_$1 as _, ____slug_ as a };
