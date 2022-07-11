<script lang="ts">
	let ran_dog = fetchDogs();

	async function fetchDogs() {
		const res = await fetch('https://dog.ceo/api/breeds/image/random');
		const json = await res.json();
		return json;
	}
</script>

<p>
	<button id="btn" on:click={() => (ran_dog = fetchDogs())}>Surprise!</button>
</p>

<section>
	{#await ran_dog}
		<p>...</p>
	{:then dog}
		<img id="img_dog" src={dog.message} alt="" />
	{/await}
</section>

<main>
	<img id="img_dog" alt="" />
</main>

<style>
	#img_dog {
		max-width: 500px;
		max-height: 600px;
		margin: 0 auto;
		display: block;
		margin-top: 20px;
	}

	#btn {
		border: 0;
		border-radius: 5px;
		background: #556672;
		color: #dadedf;
		padding: 5px 16px;
		font-size: 16px;
		margin: 0 auto;
		display: block;
		margin-top: 20px;
	}
</style>
