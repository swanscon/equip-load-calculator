<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <h1>AdvancedForm.vue</h1>
    <RouterLink to="/advanced/results"><button>Calculate</button></RouterLink>
    <RouterLink to="/"><button>Back</button></RouterLink>
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