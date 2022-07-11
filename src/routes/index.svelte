<script lang="ts">
	import Header from '$lib/Header.svelte';
	import About from '$lib/App.svelte';
	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	let condition: number = 1;
</script>

<main>
	<Header {condition} />
	<About />
</main>

<style>
</style>
