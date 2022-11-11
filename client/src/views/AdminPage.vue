<template>
  <div>
    <TableLayout>
      <template #page-title>
        <h1>Admin</h1>
      </template>

      <Table
        :isAdmin="true"
        tableTitle="Lista de Participantes version Admin"
      />
    </TableLayout>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Table from "@/components/Table.vue";
import TableLayout from "@/layouts/TableLayout.vue";
// import { useAuthStore } from "@/stores/auth-store";

// const authStore = useAuthStore();
// const isAdmin = ref(await authStore.getUserRol());
</script>
