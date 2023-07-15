<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Yotam Korah</title>
	<meta name="description" content="Yotam Korah Page" />
</svelte:head>

<section>
	<h1>Who Am I</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
