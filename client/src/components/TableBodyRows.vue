<template>
  <tr v-for="(user, index) in usersList" :key="index">
    <td scope="row">{{ index + 1 }}</td>
    <td><div></div></td>
    <td>{{ user.name }}</td>
    <td>{{ user.experience }}</td>
    <td>{{ user.specialty }}</td>

    <td v-if="isAdmin">
      <input type="checkbox" :checked="user.is_confirmed" />
    </td>
    <td
      v-if="!isAdmin"
      class="font-weight-bold"
      :class="[user.is_confirmed ? 'text-success' : 'text-warning']"
    >
      {{ user.is_confirmed ? "aprobado" : "pendiente" }}
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
