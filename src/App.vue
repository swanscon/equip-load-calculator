<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<header>
		<div class="wrapper">
		<HelloWorld/>
		</div>
	</header>
	<div class="content">
		<RouterView />
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;
}
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;
	min-height: 350px;
}
</style>
