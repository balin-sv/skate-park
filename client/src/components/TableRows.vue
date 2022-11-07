<template>
  <tr v-for="(user, index) in usersList" :key="index">
    <th scope="row">{{ index + 1 }}</th>
    <td><div></div></td>
    <td>{{ user.nombre }}</td>
    <td>{{ user.anos_experiencia }}</td>
    <td>{{ user.especialidad }}</td>

    <td v-if="isAdmin"><input type="checkbox" :checked="user.estado" /></td>
    <td
      v-if="!isAdmin"
      class="font-weight-bold"
      :class="[user.estado ? 'text-success' : 'text-warning']"
    >
      {{ user.estado ? "aprobado" : "pendiente" }}
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  usersList: {
    type: Array,
  },
  isAdmin: Boolean,
});
</script>
