<template>
  <div>
    <TableLayout>
      <template #page-title>
        <h1>Skate Park Participantes</h1>
      </template>
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
    </TableLayout>
  </div>
</template>
<script setup>
import TableLayout from "@/layouts/TableLayout.vue";
import TableTitle from "@/components/TableTitle.vue";
import TableBodyRows from "@/components/TableBodyRows.vue";
import TableHeaderRow from "@/components/TableHeaderRow.vue";

import { ref } from "vue";
import axios from "axios";

const usersList = ref([]);
const tableHeaders = ref();

const getUsers = async () => {
  return new Promise(async (resolve, reject) => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setTimeout(async () => {
          usersList.value = res.data.data;
          tableHeaders.value = [];
          Object.entries(res.data.table_headers).forEach(([key, value]) => {
            tableHeaders.value.push({ value: key, title: value });
          });
          resolve(true);
        }, 2000);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

await getUsers();
</script>
