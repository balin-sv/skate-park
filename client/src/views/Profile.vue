<template>
  <div>
    <FormLayout>
      <template #page-title>
        <h1>User Page</h1>
      </template>
      <Form :isAuthRequired="true" formTitle="Cambiar datos personales" />
    </FormLayout>
  </div>

  <!-- <h1><RouterLink to="/">Skate Park</RouterLink></h1>

  <div class="py-4">
    <h2>Datos del perfil</h2>
    <hr class="w-50" />
    <form>
      <div class="form-group row w-50 m-auto">
        <div class="form-group col-12 col-sm-6">
          <label>Email</label>
          <input class="form-control m-auto" disabled :value="userData.email" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Nombre</label>
          <input v-model="userData.nombre" class="form-control m-auto" />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Password</label>
          <input
            type="password"
            class="form-control m-auto"
            v-model="userData.password"
          />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Repita la password</label>
          <input
            type="password"
            class="form-control m-auto"
            v-model="newPassword"
          />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Años de experiencia</label>
          <input
            class="form-control m-auto"
            v-model="userData.anos_experiencia"
          />
        </div>
        <div class="form-group col-12 col-sm-6">
          <label>Especialidad</label>
          <input class="form-control m-auto" v-model="userData.especialidad" />
        </div>
      </div>
      <div class="mb-1">
        <button
          @click="
            (e) => {
              e.preventDefault();
              editAccount(userData.id);
            }
          "
          class="btn btn-primary"
        >
          Actualizar
        </button>
      </div>
      <div>
        <button
          @click="
            (e) => {
              e.preventDefault();
              deleteAccount(userData.id);
            }
          "
          class="btn btn-danger"
        >
          Eliminar cuenta
        </button>
      </div>
    </form>
  </div> -->
</template>
<script setup>
import Form from "@/components/Form.vue";
import FormLayout from "@/layouts/FormLayout.vue";
</script>
