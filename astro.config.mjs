import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify'

export default defineConfig({
	integrations: [mdx(), sitemap()],
	site: 'https://main--astrossrtest.netlify.app/',
	output: 'server',
	adapter: netlify(),
})
