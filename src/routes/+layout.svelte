<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<main class="mx-10 absolute top-24" style="width: calc(100% - 5rem);">
	<!-- Render actual page here-->
	<slot />
</main>
<Header />
