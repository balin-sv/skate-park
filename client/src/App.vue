<template>
  <router-view />
</template>
<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
  console.log("in app");
});
</script>
