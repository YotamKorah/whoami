<script lang="ts">
	import closeUp from '$lib/images/closeUp.jpg';
	import github from '$lib/images/github.svg';
	import { Card } from 'flowbite-svelte';
	import type { PageData } from './types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Yotam's Projects</title>
	<meta name="description" content="My Previus Projects" />
	<meta property="og:image" content={closeUp} />
</svelte:head>

<div class="text-column">
	<h1>My Previus Projects</h1>

	<h3 class="text-center m-2 text-lg">Here you can find some of my previus projects.</h3>
	<br />
	{#each data.projects as project}
		<Card
			href={project.url}
			class="bg-light-primary dark:bg-dark-secondary border-2 border-light-secondary dark:border-dark-accent rounded-lg m-5 p-5 text-gray-800 dark:text-gray-800"
			size="xl"
		>
			<div class="flex flex-row">
				<img src={github} class="w-10 h-10 m-2" alt="Github Logo" />
				<h3 class="sm:text-2xl text-sm h-10 m-2 mt-3 align-middle">{project.name}</h3>
			</div>
			<br />
			<p class="sm:text-md text-sm">{project.description}</p>
		</Card>
	{/each}
</div>
