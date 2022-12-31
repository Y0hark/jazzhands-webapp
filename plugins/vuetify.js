// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
	theme: {
		themes: {
			light: {
				dark: false,
				colors : {
					primary: '#8F78FF',
					primary2: '#C8BDFF',
					secondary: '#2FDDE1',
					secondary2: '#C1F5F6',
					accent: '#6AFDA8',
					accentlight: '#D3FFE5',
					accent2: '#F0B7FF',
					accent2light: '#FBEAFF',
					mainText: '#203138',
					mainBackground: '#FDF9FF',
				},
			},
		},
	},
  })

  nuxtApp.vueApp.use(vuetify)
})
