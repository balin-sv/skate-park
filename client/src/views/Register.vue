<template>
  <h1><RouterLink to="/">Skate Park</RouterLink></h1>

  <div class="py-4">
    <h2>Registro</h2>
    <hr class="w-50" />

    <form>
      <div class="form-group row w-50 m-auto">
        <div class="form-group col-12 col-sm-6">
          <label>Email</label>
          <input v-model="email" class="form-control m-auto" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Nombre</label>
          <input v-model="nombre" class="form-control m-auto" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Password</label>
          <input v-model="password" class="form-control m-auto" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Repita la password</label>
          <input v-model="newPassword" class="form-control m-auto" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Años de experiencia</label>
          <input v-model="anos_experiencia" class="form-control m-auto" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Especialidad</label>
          <input v-model="especialidad" class="form-control m-auto" />
        </div>
        <div class="form-group col-12 col-sm-12">
          <label>Foto de perfil</label>
          <input type="file" />
        </div>
      </div>
      <button
        @click="
          (e) => {
            e.preventDefault();
            createAccount();
          }
        "
        class="btn btn-info mb-3"
      >
        Registrarme
      </button>
      <p><RouterLink to="/login">Iniciar Sesión</RouterLink></p>
    </form>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const router = useRouter();
const email = ref("");
const nombre = ref("");
const password = ref("");
const anos_experiencia = ref();
const especialidad = ref();

const newPassword = ref();

const createAccount = async () => {
  if (password.value != newPassword.value) {
    alert("contracenas no coiciden");
    return;
  }
  try {
    const { data } = await axios.post(`http://localhost:5000/new-user`, {
      email: email.value,
      nombre: nombre.value,
      password: password.value,
      anos_experiencia: parseInt(anos_experiencia.value),
      especialidad: especialidad.value,
    });
    router.push("/");
  } catch (e) {
    console.log(e);
    alert("email esta ocupado");
  }
};
</script>
