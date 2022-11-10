<template>
  <Suspense>
    <component :is="layout">
      <router-view />
    </component>
    <template #fallback> Loading...content </template>
  </Suspense>
  <NavBar></NavBar>
</template>

<script setup>
import { RouterView } from "vue-router";
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import NavBar from "@/components/NavBar.vue";

const layout = computed(() => {
  const { meta } = useRoute();
  if (meta.layout == {}) {
    return;
  }
  console.log(meta);
  const layoutName = meta.layout ?? "DefaultLayout";
  return defineAsyncComponent(() => import(`./layouts/${layoutName}.vue`));
});
</script>
