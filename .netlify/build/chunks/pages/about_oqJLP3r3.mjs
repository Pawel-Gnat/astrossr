import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, g as renderComponent, h as renderHead, f as renderSlot, u as unescapeHTML } from '../astro_33FpgxU4.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { marked } from 'marked';
import { g as getLangFromUrl, $ as $$BaseHead, a as $$Header, b as $$Footer } from './404_Biuuado4.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "E:/Web kurs/astrossr/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const lang = getLangFromUrl(Astro2.url);
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")} data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "E:/Web kurs/astrossr/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${"b3d770ff6f59983b22594f18cc2794"}`
    },
    body: JSON.stringify({
      query: `{
			aboutpage {
				h1(locale: en)
				slot(locale: en, markdown: true)
			}
		}
      `
    })
  });
  const json = await response.json();
  const data = json.data.aboutpage;
  const content = marked.parse(data.slot);
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": data.h1, "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>${unescapeHTML(content)}</div> ` })}`;
}, "E:/Web kurs/astrossr/src/pages/en/about.astro", void 0);
const $$file = "E:/Web kurs/astrossr/src/pages/en/about.astro";
const $$url = "/en/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, about as a };
