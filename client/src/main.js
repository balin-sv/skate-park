import { createApp, markRaw } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/assets/main.css";

const pinia = createPinia();
const app = createApp(App);
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.mount("#app");
