<template>
  <h2>{{ formTitle }}</h2>
  <hr class="w-50" />
  <form>
    <div class="form-group row w-50 m-auto">
      <div class="form-group col-12 col-sm-6">
        <label>Email</label>
        <input class="form-control m-auto" disabled :value="userData.email" />
      </div>
      <div class="form-group col-12 col-sm-6">
        <label>Nombre</label>
        <input v-model="userData.nombre" class="form-control m-auto" />
      </div>
      <div class="form-group col-12 col-sm-6">
        <label>Password</label>
        <input
          type="password"
          class="form-control m-auto"
          v-model="userData.password"
        />
      </div>
      <div class="form-group col-12 col-sm-6">
        <label>Repita la password</label>
        <input
          type="password"
          class="form-control m-auto"
          v-model="newPassword"
        />
      </div>
      <div class="form-group col-12 col-sm-6">
        <label>Años de experiencia</label>
        <input
          class="form-control m-auto"
          v-model="userData.anos_experiencia"
        />
      </div>
      <div class="form-group col-12 col-sm-6">
        <label>Especialidad</label>
        <input class="form-control m-auto" v-model="userData.especialidad" />
      </div>
    </div>
    <div class="mb-1">
      <button
        @click="
          (e) => {
            e.preventDefault();
            editAccount(userData.id);
          }
        "
        class="btn btn-primary"
      >
        Actualizar
      </button>
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
</template>
<script setup>
import { useAuthStore } from "@/stores/auth-store.js";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const router = useRouter();
const authStore = useAuthStore();
const userData = ref({
  email: "",
  nombre: "",
  password: "",
  anos_experiencia: "",
  especialidad: "",
});

const newPassword = ref();

const props = defineProps({
  isAuthRequired: {
    type: Boolean,
    required: true,
  },
  formTitle: {
    type: String,
    required: true,
  },
});

const result = await authStore.getUser();
if (Object.keys(result) == 0) {
  console.log(userData.value);
  console.log("No hay usuario");
} else {
  console.log(userData.value);
  console.log("Hay usuario");
  userData.value = result;
  newPassword.value = userData.value.password;
}

newPassword.value = userData.value.password;

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

const deleteAccount = async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:5000/delete/${id}`, {
      headers: { authToken: authStore.getUserToken() },
    });
    router.push("/");
  } catch (e) {
    console.log(e);
  }
};

const editAccount = async (id) => {
  console.log(id);
  console.log(userData.value);

  if (userData.value.password != newPassword.value) {
    return;
  }
  try {
    const { data } = await axios.put(
      `http://localhost:5000/user/${id}`,
      {
        nombre: userData.value.nombre,
        password: userData.value.password,
        anos_experiencia: userData.value.anos_experiencia,
        especialidad: userData.value.especialidad,
      },
      { headers: { authToken: authStore.getUserToken() } }
    );
    router.push("/");
  } catch (e) {
    console.log(e);
  }
};
</script>
