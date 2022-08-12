<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  })
</script>

<template>
  <div class="mb-3">
    <h2 v-if="title" class="text-2xl mb-1 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      {{ title }}
    </h2>
    <p v-if="description" class="dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<style lang="" scope>
</style>