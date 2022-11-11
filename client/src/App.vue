<template>
  <Suspense timeout="0" v-if="!error">
    <template #default>
      <component :is="layout">
        <router-view />
      </component>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
  <div v-else><Error /></div>
  <NavBar></NavBar>
</template>

<script setup>
import { RouterView } from "vue-router";
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Loading from "@/views/Loading.vue";
import Error from "@/views/Error.vue";

import { ref, onErrorCaptured } from "vue";

const error = ref(null);

onErrorCaptured((err) => {
  error.value = err;
  console.log(error.value);
});

const layout = computed(() => {
  const { meta } = useRoute();
  if (Object.keys(meta).length == 0) {
    return;
  }
  console.log(meta);
  const layoutName = meta.layout ? meta.layout : "DefaultLayout";
  return defineAsyncComponent(() => import(`./layouts/${layoutName}.vue`));
});
</script>
