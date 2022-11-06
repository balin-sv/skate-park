<template>
  <tr v-for="user in userData">
    <th scope="row">{{ user.id }}</th>
    <td><div></div></td>
    <td>{{ user.nombre }}</td>
    <td>{{ user.anos_experiencia }}</td>
    <td>{{ user.especialidad }}</td>
    <td
      class="font-weight-bold"
      :class="[user.estado ? 'text-success' : 'text-warning']"
    >
      {{ user.estado ? "aprobado" : "pendiente" }}
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  userData: {
    type: Array,
  },
});
</script>
