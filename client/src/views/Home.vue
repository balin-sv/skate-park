<template>
  <div>
    <TableLayout>
      <template #page-title>
        <h1>Home</h1>
      </template>
      <Table :isAdmin="false" tableTitle="Lista de Participantes" />
    </TableLayout>
  </div>
</template>
<script setup>
import Table from "@/components/Table.vue";
import TableLayout from "@/layouts/TableLayout.vue";
</script>
