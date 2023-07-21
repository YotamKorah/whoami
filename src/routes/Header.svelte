<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
	import logo from '$lib/images/closeUp.jpg';
	import { page } from '$app/stores';

	const toggleOnMobile = (toggleCallback: (e: MouseEvent) => void) => {
		if (window.innerWidth <= 640) {
			return toggleCallback;
		}
	};
</script>

<header class="fixed top-0 left-0 right-0">
	<Navbar
		navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b dark:bg-gray-900"
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
			<span
				class="self-center whitespace-nowrap text-xl font-semibold text-primary-700 dark:text-secondary-100"
				>Yotam Korah</span
			>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={$page.url.pathname === '/'} on:click={toggleOnMobile(toggle)}>Home</NavLi>
			<NavLi href="/projects" active={$page.url.pathname === '/projects'} on:click={toggleOnMobile(toggle)}>Projects</NavLi>
			<NavLi href="/resume" active={$page.url.pathname === '/resume'} on:click={toggleOnMobile(toggle)}>Resume</NavLi>
			<NavLi href="/contact" active={$page.url.pathname === '/contact'} on:click={toggleOnMobile(toggle)}>Contact Me</NavLi>
			<DarkMode
				class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-lg"
				style="padding: 0.5rem"
			/>
		</NavUl>
	</Navbar>
</header>
