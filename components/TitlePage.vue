<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>

<template lang="">
  <div>
    <h1 class="my-3 text-4xl font-bold dark:text-white">
      {{ title }}
    </h1>
  </div>
</template>

<style lang="">
</style>
