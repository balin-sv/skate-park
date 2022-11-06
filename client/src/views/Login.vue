<template>
  <h1><RouterLink to="/">Skate Park</RouterLink></h1>

  <div class="py-5">
    <h2>Iniciar Sesión</h2>
    <hr class="w-50" />

    <form @submit="login">
      <div class="form-group">
        <div class="form-group">
          <label>Email</label>
          <input
            @change="
              (e) => {
                email = e.target.value;
              }
            "
            class="form-control w-50 m-auto"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            @change="
              (e) => {
                password = e.target.value;
              }
            "
            class="form-control w-50 m-auto"
          />
        </div>
      </div>
      <button class="btn btn-success mb-3">Ingresar</button>
      <p>
        ¿Aún no tienes cuenta?
        <RouterLink to="/register">Registrarme</RouterLink>
      </p>
    </form>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth-store.js";

import { ref } from "vue";
const router = useRouter();
const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const login = async (e) => {
  e.preventDefault();
  try {
    authStore.logIn(email.value, password.value).then((res) => {
      if (res) {
        router.push("/profile");
      } else {
        //temporal
        location.reload();
      }
    });
  } catch (e) {
    console.log(e);
  }
};
</script>
