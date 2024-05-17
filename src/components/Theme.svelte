<script>
	import { onMount } from "svelte";

	let theme = "dark";
	let language = "en";
	let currentPath = '/'
	onMount(() => {
		theme = window.localStorage.getItem("theme") || "light";
		const pathName = window.location.pathname;
		let languagePath = pathName.split("/")[1];
		currentPath = pathName.split("/")[2];
		language = window.localStorage.getItem("language") || language;
		if (languagePath !== language) {
			window.location.href = `/${language}/${currentPath}`;
		}
	});
	function handleClickTheme() {
		theme = theme === "light" ? "dark" : "light";
		window.localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark");
	}
	function handleClicklanguage() {
		language = language === "es" ? "en" : "es";
		window.localStorage.setItem("language", language);
		window.location.href = `/${language}/${currentPath}`;
	}
</script>

<div>
	<button on:click={handleClickTheme}>
		{theme === "light" ? "🌙" : "🌞"}
	</button>
	<button on:click={handleClicklanguage}>
		{language === "en" ? "🇪🇸" : "🇺🇸"}
	</button>
</div>
