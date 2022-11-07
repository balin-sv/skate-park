<template>
  <h1><RouterLink to="/">Skate Park</RouterLink></h1>

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
        <button
          @click="
            (e) => {
              e.preventDefault();
              deleteAccount(userData.id);
            }
          "
          class="btn btn-danger"
        >
          Eliminar cuenta
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth-store.js";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const router = useRouter();
const authStore = useAuthStore();
const userData = ref({});

onMounted(async () => {
  userData.value = await authStore.getUser();
});

const deleteAccount = async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:5000/delete/${id}`);
    router.push("/");
  } catch (e) {
    console.log(e);
  }
};
</script>
