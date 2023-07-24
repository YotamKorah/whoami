<script lang="ts">
	import closeUp from '$lib/images/closeUp.jpg';
	export let data;
</script>

<svelte:head>
	<title>Yotam's Projects</title>
	<meta name="description" content="My Contact Information" />
	<meta property="og:image" content={closeUp} />
</svelte:head>

<div class="text-column">
	<h1>Get In Touch</h1>

	<p class="text-center m-2 text-lg">
		If you feel I might be the right person for your team, feel free to contact me.
	</p>
	<br />

	<div class="flex justify-center flex-row">
		<svg
			class="w-6 h-6 m-2 text-light-secondary dark:text-dark-secondary"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 20 16"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
			/>
		</svg>
		<a class="m-2" href="mailto:{data.email}" target="”_blank”">
			{data.email}
		</a>
	</div>

	<div class="flex justify-center flex-row">
		<svg
			class="w-6 h-6 m-1 text-light-secondary dark:text-dark-secondary"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 15 15"
		>
			<path
				fill-rule="evenodd"
				d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
				clip-rule="evenodd"
			/>
			<path d="M3 5.012H0V15h3V5.012Z" />
		</svg>
		<a class="m-2" href="https://www.linkedin.com/in/{data.linkedin}" target="”_blank”">
			linkedin.com/in/{data.linkedin}
		</a>
	</div>

	<div class="flex justify-center flex-row">
		<svg
			class="w-6 h-6 m-2 text-light-secondary dark:text-dark-secondary"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 18 18"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
			/>
		</svg>
		<a class="m-2" href="tel:{data.phoneNumber}">
			{data.phoneNumberStr}
		</a>
	</div>
</div>
