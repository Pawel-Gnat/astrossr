import { c as createComponent, r as renderTemplate, g as renderComponent, e as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../astro_33FpgxU4.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { marked } from 'marked';
import { $ as $$BlogPost } from './about_oqJLP3r3.mjs';

const $$Astro = createAstro();
const $$Omnie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Omnie;
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
				slot(locale: pl, markdown: true)
				h1(locale: pl)
			}
		}
      `
    })
  });
  const json = await response.json();
  const data = json.data.aboutpage;
  const content = marked.parse(data.slot);
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": data.h1, "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>${unescapeHTML(content)}</div> ` })}`;
}, "E:/Web kurs/astrossr/src/pages/omnie.astro", void 0);
const $$file = "E:/Web kurs/astrossr/src/pages/omnie.astro";
const $$url = "/omnie";

export { $$Omnie as default, $$file as file, $$url as url };
