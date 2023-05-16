<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { useCalcStore } from '../stores/calculator';
  const calc = useCalcStore();
</script>

<template>
  <div class="wrapper">
    <form>
				<input v-model="calc.maxLoad" placeholder="MAX EQUIP LOAD" input type="text" id="max" name="max" required>
				<br/>
				<input v-model="calc.curLoad" placeholder="CURRENT LOAD (optional)" input type="text" id="current" name="current">
				<br/>
		</form>
    <RouterLink to="/advanced"><button>Advanced</button></RouterLink>
    <RouterLink to="/results"><button>Calculate</button></RouterLink>
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