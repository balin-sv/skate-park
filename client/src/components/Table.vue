<template>
  <table-title></table-title>
  <hr class="w-50" />
  <table class="table table-dark">
    <thead>
      <table-header-row :tableHeaders="tableHeaders"> </table-header-row>
    </thead>
    <tbody>
      <table-body-rows
        :usersList="usersList"
        :isAdmin="false"
      ></table-body-rows>
    </tbody>
  </table>
</template>

<script setup>
import TableTitle from "@/components/TableTitle.vue";
import TableBodyRows from "@/components/TableBodyRows.vue";
import TableHeaderRow from "@/components/TableHeaderRow.vue";

// import { useUsersStore } from "@/stores/users-store.js";
// import { ref, onMounted } from "vue";

// const usersStore = useUsersStore();
// const usersList = ref([]);
// const tableHeaders = ref();

// const getUsers = async () => {
//   await usersStore.getUsers();
//   usersList.value = usersStore.getTableUserList();
//   tableHeaders.value = usersStore.getTableHeaders();
// };

// onMounted(() => {
//   console.log("in");
//   getUsers();
// });
</script>
