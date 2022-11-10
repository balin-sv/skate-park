<template>
  <tr>
    <th style="col">#</th>
    <th v-for="(header, i) in tableHeaders" :key="i" style="col">
      {{ header.title }}
    </th>
  </tr>
</template>

<script setup>
const props = defineProps({ tableHeaders: { type: Array } });
</script>
