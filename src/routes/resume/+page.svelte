<script lang="ts">
	import resume from '$lib/documents/resume.pdf';
</script>

<svelte:head>
	<title>Yotam's Resume</title>
	<meta name="description" content="Updated Resume" />
</svelte:head>

<div class="text-column">
	<h1>Everything In One Place</h1>

	<iframe title="Yotam's Resume" src={resume} class="h-96 w-10/12 m-auto" allowfullscreen>
		<p style="font-size: 110%;">
			<em
				><strong>ERROR: </strong>
				An &#105;frame should be displayed here but your browser version does not support &#105;frames.
			</em>Please update your browser to its most recent version and try again.
		</p>
	</iframe>
</div>
