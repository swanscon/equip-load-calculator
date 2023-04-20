<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <h1>Results.vue</h1>
    <RouterLink to="/results">Results</RouterLink>
  </div>
    <RouterView/>
</template>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	font-size: 1.1rem;
}
</style>