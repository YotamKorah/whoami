<script>
	import mediumShot from '$lib/images/mediumShot.jpg';

	/** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>Yotam Korah</title>
	<meta name="description" content="Yotam Korah Page" />
</svelte:head>

<h1 class="w-full mb-3">About Myself</h1>
<section class="flex flex-row flex-wrap">
	<img src={mediumShot} class="sm:w-5/12 w-full rounded-2xl m-auto border-light-secondary dark:border-dark-secondary border-x-4 border-y-4" alt="Yotam Korah" />
	<p class="sm:w-6/12 w-full text-base" style="line-height: 2rem;">
		I am a {data.yearsOld} years old {data.profession} from {data.location}. <br/>
		I bring expertise in a wide range of technologies, including Python, React, TypeScript, Ansible, Openshift, and Azure DevOps, among others. <br/>
		I have successfully implemented robust DevOps strategies and streamlined software development processes. <br/>
		I have a keen eye for identifying areas of improvement and implementing solutions to enhance performance and reliability. <br/>
		I continuously expand my skill set to embrace emerging technologies and methodologies. <br/>
		I have a solid understanding of cloud computing, containerization, and CI/CD best practices. <br/>
	</p>
</section>
<br/>
<section class="w-6/12">
	<h2 class="w-full mb-3 text-lg text-center">My Skills</h2>
	<ul class="list-disc">
		<li>Python, Typescript and Java Development</li>
		<li>Kubernetes administration</li>
		<li>...</li>
	</ul>
</section>