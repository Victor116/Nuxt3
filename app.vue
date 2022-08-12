<script setup>
// Store Pinia
import '@/assets/css/tailwind.css'
import { useAppStore } from "~/stores/store";

const appState = useAppStore();

onMounted (() => {
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    appState.changeMode(true)
  } else {
    document.documentElement.classList.remove('dark');
    appState.changeMode(false)
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
