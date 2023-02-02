// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		define: {
		'process.env.DEBUG': false,
		},
	},
	ssr: false,
	css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '@/assets/css/main.css'],
	build: {
		transpile: ['vuetify'],
	},
	modules: ['@pinia/nuxt'],
})
