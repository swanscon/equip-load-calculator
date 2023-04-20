<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<header>
		<div class="wrapper">
		<HelloWorld/>
		<!-- <RouterLink to="/">Home</RouterLink>
		<RouterLink to="/advanced">Advanced</RouterLink> -->
		</div>
	</header>

	<RouterView />
</template>

<style scoped>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;
}
</style>
