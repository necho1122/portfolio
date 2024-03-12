document.addEventListener("DOMContentLoaded", () => {
	const toggleButton = document.getElementById("toggleButton");

	toggleButton.addEventListener("click", () => {
		const root = document.documentElement;

		if (root.classList.contains("light-mode")) {
			root.classList.remove("light-mode");
			root.classList.add("dark-mode");
		} else {
			root.classList.remove("dark-mode");
			root.classList.add("light-mode");
		}
	});

	const imageLinks = document.querySelectorAll("a > img");

	for (const img of imageLinks) {
		img.parentElement.addEventListener("click", (event) => {
			event.preventDefault();

			if (
				img.src ===
				"https://www.svgrepo.com/show/381213/dark-mode-night-moon.svg"
			) {
				img.src = "https://www.svgrepo.com/show/433086/light-mode.svg";
			} else {
				img.src =
					"https://www.svgrepo.com/show/381213/dark-mode-night-moon.svg";
			}
		});
	}
});
