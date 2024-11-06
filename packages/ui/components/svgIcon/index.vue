<script setup>
  import { computed } from "vue";
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    fillClass: {
      type: String,
      default: ''
    }
  })
  // 真实显示的svg图标
  const symbolId = computed(() => `#icon-yama-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :class="fillClass" :fill="color" />
  </svg>
</template>
<style lang="less" scoped></style>
