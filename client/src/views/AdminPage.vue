<template>
  <h1><RouterLink to="/">Skate Park</RouterLink></h1>

  <div class="py-4">
    <h2>Administración</h2>
    <hr class="w-50" />

    <table class="table w-50 m-auto">
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
        <table-rows :usersList="usersList" :isAdmin="true"></table-rows>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import TableRows from "@/components/TableRows.vue";
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/stores/users-store.js";

const usersStore = useUsersStore();
const usersList = ref([]);
const tableHeaders = ref();

const getUsers = async (query = "") => {
  await usersStore.getUsers();
  usersList.value = usersStore.getTableUserList();
  tableHeaders.value = usersStore.getTableHeaders();
};

onMounted(() => {
  getUsers();
});
</script>
