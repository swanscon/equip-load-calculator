<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <form>
				<input v-model="curEndurance" placeholder="ENDURANCE" input type="text" id="endurance" name="endurance" required>
				<br/>
				<div class="items">
					<div class="item">
						<input type="checkbox" id="arsenalcharm" value="Arsenal Charm" v-model="checkedItems" class="defaultCheckbox"><label for="arsenalcharm">Arsenal Charm</label>
					</div>
					<div class="item">
						<input type="checkbox" id="arsenalcharm1" value="Arsenal Charm +1" v-model="checkedItems" class="defaultCheckbox"><label for="arsenalcharm1">Arsenal Charm +1</label>
					</div>
					<div class="item">
						<input type="checkbox" id="erdtree" value="Erdtree&#x27;s Favor" v-model="checkedItems" class="defaultCheckbox">
						<label for="erdtree">Erdtree's Favor</label>
					</div>
					<div class="item">
						<input type="checkbox" id="erdtree1" value="Erdtree&#x27;s Favor +1" v-model="checkedItems" class="defaultCheckbox">
						<label for="erdtree1">Erdtree's Favor +1</label>
					</div>
					<div class="item">
						<input type="checkbox" id="erdtree2" value="Erdtree&#x27;s Favor +2" v-model="checkedItems" class="defaultCheckbox">
						<label for="erdtree2">Erdtree's Favor +2</label>
					</div>
					<div class="item">
						<input type="checkbox" id="greatjar" value="Great-Jar&#x27;s Arsenal" v-model="checkedItems" class="defaultCheckbox">
						<label for="greatjar">Great-Jar's Arsenal</label>
					</div>
				</div>
				<br/>
			</form>
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