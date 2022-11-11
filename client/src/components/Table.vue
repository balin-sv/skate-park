<template>
  <table-title :tableTitle="tableTitle"></table-title>
  <hr class="w-50" />
  <table class="table table-dark">
    <thead>
      <table-header-row :tableHeaders="tableHeaders"> </table-header-row>
    </thead>
    <tbody>
      <table-body-rows
        :tableRows="tableRows"
        :isAdmin="isAdmin"
      ></table-body-rows>
    </tbody>
  </table>
</template>

<script setup>
import TableTitle from "@/components/TableTitle.vue";
import TableBodyRows from "@/components/TableBodyRows.vue";
import TableHeaderRow from "@/components/TableHeaderRow.vue";

import { ref } from "vue";
import axios from "axios";

const tableRows = ref([]);
const tableHeaders = ref();

const props = defineProps({
  tableTitle: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
});

const getUsers = async () => {
  return new Promise(async (resolve, reject) => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setTimeout(async () => {
          tableRows.value = res.data.data;
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
