<style>
  @import 'css/signin.css';
</style>
<script setup>
  import signinJs from '../js/signin.js';
</script>

<template>
  <main class="flex-column row w-100">
    <div class="flex-column justify-content-center">
      <img class="mx-auto" id="logo" src="icon/logo.png" alt="">
      <h1 class="text-center">FU Food</h1>
    </div>
      <div class="content row flex-column align-items-center">
        <div class="username row w-25">
          <label for="username" class="form-label col-4 text-end">Username:</label>
          <input v-model="signinJs.user.username" type="text" name="username" id="username" class="form-input col-8" required>
        </div>
        <div class="password row w-25">
          <label for="username" class="form-label col-4 text-end">Password: </label>
          <input v-model="signinJs.user.password" type="password" name="password" id="password" class="form-input col-8" required>
        </div>
        <div class="row w-25 justify-content-center">
          <button type="submit" class="form-button btn btn-primary" @click="signinJs.onSignin">Login</button>
        </div>
      </div>
  </main>
</template>