<script setup></script>

<template>
  <h1>Skate Park</h1>

  <div class="py-4">
    <h2>Lista de participantes</h2>

    <hr />

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Foto</th>
          <th scope="col">Nombre</th>
          <th scope="col">Años de experiencia</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <table-rows :usersList="usersList" :isAdmin="false"></table-rows>
      </tbody>
    </table>
    <RouterLink to="/login">Iniciar Sesión</RouterLink> |
    <RouterLink to="/register">Registrarme</RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import TableRows from "@/components/TableRows.vue";
import { ref } from "vue";
import axios from "axios";

const usersList = ref([]);

const getUsers = async (query = "") => {
  await axios
    .get("http://localhost:5000/users")
    .then((res) => {
      usersList.value = res.data;
      console.log(res);
    })
    .catch((err) => console.log(err));
};
getUsers();
</script>
