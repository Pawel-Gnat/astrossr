import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify/functions'

export default defineConfig({
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: netlify({
		edgeMiddleware: true,
	}),
})
