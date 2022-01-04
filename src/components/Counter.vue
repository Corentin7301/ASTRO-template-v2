<template>
	<div class="space-y-6">
		<div class=" text-center text-3xl">
			<slot />
		</div>
		<div class=" max-w-lg m-auto flex justify-around items-center text-center ">
			  <button @click="subtract()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 transition-all hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">-</button>
			<p class=" text-xl font-semibold">{{ count }}</p>
			<button @click="add()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 transition-all hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">+</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const count = ref(0);
		const add = () => (count.value = count.value + 1);
		const subtract = () => (count.value = count.value - 1);

		return {
			count,
			add,
			subtract,
		};
	},
};
</script>

