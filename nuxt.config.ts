import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-25',

  devtools: {
    enabled: true
  },

  css: [
    './aparencia/css/main.css'
  ],

  dir: {
    pages: 'paginas'
  }
})