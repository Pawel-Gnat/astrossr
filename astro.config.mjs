import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify'

import node from '@astrojs/node'

export default defineConfig({
	site: 'https://astrotest.pl',
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: netlify(),
})
