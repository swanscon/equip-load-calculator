<template>
  	<div class="content">
			<img class="logo" src="/er-logo.png">
			<h1>E<h1 class="smaller">LDEN RIN</h1>G</h1>
			<h3>Equip Load Calculator</h3>
		</div>
</template>

<style>
.logo {
	max-width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  }
h1 {
	color: rgb(240, 224, 145);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	text-shadow: 0px 0px 20px rgba(0,0,0,1);
}
.smaller {
	font-size: 2.3rem;
}
h3 {
	display: flex;
	align-items: center;
	justify-content: center;
	text-shadow: 0px 0px 8px rgba(0,0,0,.8);
}
.content {
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	justify-content: center;
	font-size: 1.1rem;
}
</style>