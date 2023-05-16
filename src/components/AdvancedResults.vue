<script setup>
  import { RouterView } from 'vue-router';
  import { useCalcStore } from '../stores/calculator';
  const calc = useCalcStore();
</script>

<template>
  <div class="wrapper">
    <h1>AdvancedResults.vue</h1>
    <RouterLink to="/"><button>RESET &#8634;</button></RouterLink>
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