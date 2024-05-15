<script>
	import { onMount } from "svelte";

	let theme = "dark";
	let languaje = "en";
	let currentPath = '/'
	onMount(() => {
		theme = window.localStorage.getItem("theme") || "light";
		const pathName = window.location.pathname;
		let languajePath = pathName.split("/")[1];
		currentPath = pathName.split("/")[2];
		languaje = window.localStorage.getItem("languaje") || languajePath;
		if (languajePath !== languaje) {
			window.location.href = `/${languaje}/${pagePath}`;
		}
	});
	function handleClickTheme() {
		theme = theme === "light" ? "dark" : "light";
		window.localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark");
	}
	function handleClickLanguaje() {
		languaje = languaje === "es" ? "en" : "es";
		window.localStorage.setItem("languaje", languaje);
		window.location.href = `/${languaje}/${currentPath}`;
	}
</script>

<div>
	<button on:click={handleClickTheme}>
		{theme === "light" ? "🌙" : "🌞"}
	</button>
	<button on:click={handleClickLanguaje}>
		{languaje === "en" ? "🇪🇸" : "🇺🇸"}
	</button>
</div>
