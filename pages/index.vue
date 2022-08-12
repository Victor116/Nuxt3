<script setup>
import Mouse from '@/components/Mouse.vue'
  useHead({
    title: 'Sitio Oficial de Lucha Libre',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Quieres saber las estadisticas de tu luchador favorito, visita la informacion en la seccion de luchadores, tambien puedes adquirir productos en nuestra tienda oficial.' }
    ],
  })
</script>

<template lang="">
  <div>
    <div class="container">
      <Mouse />
    </div>
  </div>
</template>

<style lang="css">
</style>
