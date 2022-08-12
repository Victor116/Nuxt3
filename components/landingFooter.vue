<script lang="ts" setup></script>

<template lang="">
  <div class="bg-gray-100 dark:bg-gray-900">
    <div class="container">
      <div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4 pb-5">
        <div></div>
        <div></div>
        <div></div>
        <div>
          <h3 class="text-3xl my-3 text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Contacto
          </h3>
          <div class="mb-3">
            <a href="tel:+9611958872" class="hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400">
              <i class="fa-solid fa-phone"></i>
              961 195 88 72
            </a>
          </div>
          <div class="grid grid-cols-4 gap-4 text-center">
            <nuxt-link to="https://www.facebook.com" target="_blank">
              <i class="text-3xl fa-brands fa-facebook hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400"></i>
            </nuxt-link>
            <nuxt-link to="https://www.youtube.com" target="_blank">
              <i class="text-3xl fa-brands fa-youtube hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400"></i>
            </nuxt-link>
            <nuxt-link to="https://www.instagram.com" target="_blank">
              <i class="text-3xl fa-brands fa-instagram hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400"></i>
            </nuxt-link>
            <nuxt-link to="https://www.tiktok.com" target="_blank">
              <i class="text-3xl fa-brands fa-tiktok hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
