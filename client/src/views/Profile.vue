<template>
  <h1>Skate Park</h1>

  <div class="py-4">
    <h2>Datos del perfil</h2>
    <hr class="w-50" />
    <form>
      <div class="form-group row w-50 m-auto">
        <div class="form-group col-12 col-sm-6">
          <label>Email</label>
          <input class="form-control m-auto" disabled :value="userData.email" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Nombre</label>
          <input class="form-control m-auto" :value="userData.nombre" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Password</label>
          <input
            type="password"
            class="form-control m-auto"
            :value="userData.password"
          />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Repita la password</label>
          <input
            type="password"
            class="form-control m-auto"
            :value="userData.password"
          />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Años de experiencia</label>
          <input
            class="form-control m-auto"
            :value="userData.anos_experiencia"
          />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Especialidad</label>
          <input class="form-control m-auto" :value="userData.especialidad" />
        </div>
      </div>
      <div class="mb-1">
        <button class="btn btn-primary">Actualizar</button>
      </div>
      <div>
        <button class="btn btn-danger">Eliminar cuenta</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth-store.js";
import { ref, onMounted } from "vue";

const authStore = useAuthStore();
const userData = ref({});

onMounted(async () => {
  userData.value = await authStore.getUser();
});
</script>
