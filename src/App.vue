// App.vue (seu arquivo principal)

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './layouts/DefaultLayout.vue';
import BlankLayout from './layouts/BlankLayout.vue';
const route = useRoute();

const layouts = {
  DefaultLayout,
  BlankLayout
};

const currentLayout = computed(() => {
  return layouts[route.meta.layout] || DefaultLayout;
});
</script>

<template>
    <component :is="currentLayout" />
</template>

<style scoped></style>