<template>
  <h1><RouterLink to="/">Skate Park</RouterLink></h1>

  <div class="py-5">
    <h2>Iniciar Sesión</h2>
    <hr class="w-50" />

    <form>
      <div class="form-group">
        <div class="form-group">
          <label>Email</label>
          <input class="form-control w-50 m-auto" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input class="form-control w-50 m-auto" />
        </div>
      </div>
      <button class="btn btn-success mb-3">Ingresar</button>
      <p>
        ¿Aún no tienes cuenta?
        <RouterLink to="/register">Registrarme</RouterLink>
      </p>
    </form>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
