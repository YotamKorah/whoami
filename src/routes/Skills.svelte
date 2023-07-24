<script lang="ts">
	import langs from '$lib/images/langs.png';
	import cicd from '$lib/images/cicd.png';
	import k8s from '$lib/images/k8s.png';
	import { Card } from 'flowbite-svelte';
</script>

<div class="w-full flex flex-row flex-wrap justify-around m-auto">
	<Card
		img={langs}
		class="bg-light-primary dark:bg-dark-primary p-4 mb-2 border-light-secondary dark:border-dark-secondary border-x-4 border-y-4"
	>
		<h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Python, TypeScript and Java Development
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Built and maintained multiple projects using Python, TypeScript and Java. <br />
			Developed and maintained multiple RESTful APIs as well as front-end applications. <br />
		</p>
	</Card>
	<Card
		img={k8s}
		class="bg-light-primary dark:bg-dark-primary p-4 mb-2 border-light-secondary dark:border-dark-secondary border-x-4 border-y-4"
	>
		<h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Kubernetes and Openshift Administration
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Managed multiple Kubernetes clusters and Openshift clusters. <br />
			Developed and maintained multiple Helm charts. <br />
			Assisted in the migration of multiple applications to Kubernetes. <br />
		</p>
	</Card>
	<Card
		img={cicd}
		class="bg-light-primary dark:bg-dark-primary p-4 mb-2 border-light-secondary dark:border-dark-secondary border-x-4 border-y-4"
	>
		<h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Designing and Implementing CI/CD Solutions
		</h5>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Built and maintained multiple CI/CD pipelines using Azure DevOps. <br />
			Adapted existing CI/CD solutions for new projects and technologies. <br />
		</p>
	</Card>
</div>
