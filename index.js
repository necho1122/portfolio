document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.getElementById('toggleButton');

	toggleButton.addEventListener('click', () => {
		const root = document.documentElement;
		const img = toggleButton.querySelector('img');
		if (root.classList.contains('light-mode')) {
			root.classList.remove('light-mode');
			root.classList.add('dark-mode');
			img.src = 'https://www.svgrepo.com/show/381213/dark-mode-night-moon.svg';
			img.alt = 'Toggle dark mode icon';
		} else {
			root.classList.remove('dark-mode');
			root.classList.add('light-mode');
			img.src = 'https://www.svgrepo.com/show/433086/light-mode.svg';
			img.alt = 'Toggle light mode icon';
		}
	});

	// Mejorar accesibilidad: permitir toggle con Enter/Espacio
	toggleButton.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleButton.click();
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const projectsSection = document.getElementById('projects');
	const projectsList = document.getElementById('projects-list');
	const projectItems = projectsList ? Array.from(projectsList.children) : [];
	const showMoreBtn = document.getElementById('show-more-projects');
	if (projectItems.length > 4) {
		for (let i = 4; i < projectItems.length; i++) {
			projectItems[i].style.display = 'none';
		}
		showMoreBtn.style.display = 'block';
		showMoreBtn.addEventListener('click', function () {
			for (let i = 4; i < projectItems.length; i++) {
				projectItems[i].style.display = '';
			}
			showMoreBtn.style.display = 'none';
		});
	} else {
		showMoreBtn.style.display = 'none';
	}
});
