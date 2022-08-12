<script setup>

const mouseX = ref(0)
const mouseY = ref(0)
const updateMousePosition = (event) => {
  const { pageX, pageY } = event
  mouseX.value = pageX
  mouseY.value = pageY
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
})

</script>

<template lang="">
  <div>
    <TitlePage title="Mouse position" />
    <p>
      Position X: {{ mouseX }} y position y: {{ mouseY }}
    </p>
  </div>
</template>

<style lang="css" scoped>
</style>