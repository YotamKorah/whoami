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
		navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b border-light-secondary dark:border-dark-secondary border-b-2 dark:bg-dark-primary bg-light-primary"
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
			<span
				class="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white"
				>Yotam Korah</span
			>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi 
				href="/" 
				active={$page.url.pathname === '/'} 
				on:click={toggleOnMobile(toggle)}
				activeClass="text-black dark:text-white"
				class="text-grey-500 text-lg"
				>Home</NavLi>
			<NavLi 
				href="/projects" 
				active={$page.url.pathname === '/projects'} 
				on:click={toggleOnMobile(toggle)}
				activeClass="text-black dark:text-white"
				class="text-grey-500 text-lg"
				>Projects</NavLi>
			<NavLi 
				href="/resume" 
				active={$page.url.pathname === '/resume'} 
				on:click={toggleOnMobile(toggle)}
				activeClass="text-black dark:text-white"
				class="text-grey-500 text-lg"
				>Resume</NavLi>
			<NavLi 
				href="/contact" 
				active={$page.url.pathname === '/contact'} 
				on:click={toggleOnMobile(toggle)}
				activeClass="text-black dark:text-white"
				class="text-grey-500 text-lg"
				>Contact Me</NavLi>
			<DarkMode
				class="text-gray-500 dark:text-gray-400 active:text-black active:dark:text-white hover:bg-transparent dark:hover:bg-transparent rounded-lg text-md focus:dark:ring-0 focus:ring-0"
				style="padding: 0.5rem"
			/>
		</NavUl>
	</Navbar>
</header>
