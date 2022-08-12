import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    lang: 'es',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: "/icono.webp" },
      { rel: 'stylesheet', href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" }
    ],
    script: [
      { src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js' },
      { src: 'https://kit.fontawesome.com/f50cd51f40.js', crossorigin: 'anonymous' }
    ]
  },
  css: [
    '~/assets/css/tailwind.css',
  ],
  modules: [
    '@pinia/nuxt'
  ],
  buildModules: [
  ],
  publicRuntimeConfig: {
    // axios: { baseURL: process.env.AXIOS_BASE_URL || 'http://localhost:3333/api/v1' }
  },
  plugins: [
  ],
  runtimeConfig: {
    public: {
      // urlApi: 'http://localhost:3333/api/v1',
    },
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    }
  }
})
