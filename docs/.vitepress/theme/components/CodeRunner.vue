<template>
  <div class="border-1 border-solid border-[#e2e2e3]">
    <div class="border-b">
      <div class="p-2">
        <div class="font-bold">{{ title }}</div>
        <div class="text-sm">{{ description }}</div>
      </div>
    </div>
    <div class="py-3 px-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
  })
</script>