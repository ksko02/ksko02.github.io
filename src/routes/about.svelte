<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Dog from '$lib/App2.svelte';

	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	let condition: number = 2;
</script>

<main>
	<Header {condition} />
	<Dog />
</main>

<style>
</style>
