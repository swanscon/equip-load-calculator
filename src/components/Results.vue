<script setup>
  import { RouterView } from 'vue-router';
  import { storeToRefs, mapActions } from 'pinia';
  import { useCalcStore } from '../stores/calculator';
  const calc = useCalcStore();
  const { maxLoad, curLoad, status } = storeToRefs(calc);
  // const { reset } = mapActions(useCalcStore, ['reset']);
  const reset = useCalcStore().reset;
  const round = useCalcStore().round;
  const medium = useCalcStore().medium;
  const heavy = useCalcStore().heavy;
</script>

<template>
  <div class="wrapper">
    <!-- <h1>{{ calc.maxLoad }}</h1> -->
      <h4 v-if="maxLoad!='' && curLoad==''">
				Your maximum equip load is {{ maxLoad }}
			</h4>
			<p v-if="curLoad==''">
				<!-- LEAVE EMPTY -->
			</p>
      <h4 v-else-if="curLoad<=(maxLoad*.2999)">
        {{ status }} LIGHT.
      </h4>
      <h4 v-else-if="curLoad>(maxLoad*.2999) && curLoad<=(maxLoad*.6999)">
        {{ status }} MEDIUM.
      </h4>
      <h4 v-else-if="curLoad>(maxLoad*.6999) && curLoad<=(maxLoad*.9999)">
        {{ status }} HEAVY.
      </h4>
      <h4 v-else-if="curLoad>=(maxLoad*.9999)">
        {{ status }} OVERLOADED.
      </h4>
      <div class="status">
				<p>
					LIGHT up to {{ round }}
				</p>
				<p>
					MEDIUM from {{ round }} to {{ medium }}
				</p>
				<p>
					HEAVY from {{ medium }} to {{ heavy }}
				</p>
			</div>
    <RouterLink to="/"><button @click="reset">RESET &#8634;</button></RouterLink>
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