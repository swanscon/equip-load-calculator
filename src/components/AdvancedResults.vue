<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <h1>AdvancedResults.vue</h1>
    <RouterLink to="/advanced/results">Advanced Results</RouterLink>
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