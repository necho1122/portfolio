import "./style.css";

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

document.querySelector("#app").innerHTML = `
  <div class="portfolio-container">
  <div class="portfolio-header">
    <div class="navbar">
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#about-me">About me</a>
      <a href="#contact">Contact</a>
      <a id="toggleButton"><img src="https://www.svgrepo.com/show/381213/dark-mode-night-moon.svg" alt="dark mode icon"/></a>
    </div>
  </div>
  <div class="portfolio-body">
    <div class="resume">
      <img src="https://live.staticflickr.com/65535/53582783172_8d0d054e44_w.jpg"/>
      <h1>Hi, I'm Nelson Ubac</h1>
      <p>Chemical engineer turned passionate web developer with <strong>1 year of freelance experience</strong>, inspired by crafting unique web applications.</p>
      <div class="resume-cta">
        <a href="https://www.linkedin.com/in/nelson-enrique-ubac-jimenez-6b1996118/" target="_blank"><img src="https://www.svgrepo.com/show/494244/linkedin-rounded-border.svg"/>Linkedin</a>
        <a href="https://github.com/necho1122" target="_blank"><img src="https://www.svgrepo.com/show/512317/github-142.svg"/>GitHub</a>
        <a href="mailto:nelsonubac90@gmail.com"><img src="https://www.svgrepo.com/show/336107/send-email.svg"/>E-mail</a>
      </div>
    </div>
    <div class="experience-section" id="experience">
      <h2>Experience</h2>
      <div class="experience-item">
        <div class="experience-item-header">
          <h3>Freelance Web Developer</h3>
          <p style="font-size: 0.9em">2022 - Present</p>
        </div>
        <p>Developed and maintained web applications for clients, portfolio website, landing pages and a web application for surveys data hosts.</p>
      </div>
    </div>
  </div>
  <div class="projects-section" id="projects">
      <h2>projects</h2>
      <div class="projects-item">
        <div class="projects-item-header">
          <img src="https://live.staticflickr.com/65535/53569664215_8a0eb2c848_z.jpg" alt="chemlab home page"/>
        </div>
        <div class="project-description">
          <h3>ChemLab</h3>
          <p>This project is a virtual lab developed in React that offers an immersive and complete learning experience for chemistry students and enthusiasts.</p>
          <a href="https://github.com/necho1122/chem-lab-virtual/" target="_blank"><img src="https://www.svgrepo.com/show/512317/github-142.svg"/>Code</a>
        </div>
      </div>
      <div class="projects-item">
        <div class="projects-item-header">
          <img src="https://live.staticflickr.com/65535/53579039579_bf4c7cffe5.jpg" alt="chemlab home page"/>
        </div>
        <div class="project-description">
          <h3>JumpZone</h3>
          <p>Jump Zone Survey App helps users manage survey data hosts. Built with React, it offers a user-friendly interface. Data is stored securely using MongoDB Atlas, and Auth0 safeguards access.</p>
          <a href="https://github.com/necho1122/jump-zone" target="_blank"><img src="https://www.svgrepo.com/show/512317/github-142.svg"/>Code</a>
        </div>
      </div>
      <div class="projects-item">
        <div class="projects-item-header">
          <img src="https://live.staticflickr.com/65535/53584243785_02e4f25239_z.jpg" alt="chemlab home page"/>
        </div>
        <div class="project-description">
          <h3>Currency converter</h3>
          <p>This React and TypeScript Project App that provides a functionality to lets you exchange between fiat and cryptocurrencies with ease.</p>
          <a href="https://github.com/necho1122/currency-converter" target="_blank"><img src="https://www.svgrepo.com/show/512317/github-142.svg"/>Code</a>
        </div>
      </div>
    </div>
    <div class="about-me-section" id="about-me">
      <h2>About me</h2>
      <p>
         I'm Nelson Ubac, a chemical engineer turned passionate web developer. After exploring different fields, I discovered my true passion in the world of web development. Over the past year, I've been immersed in this exciting journey as a freelance web developer.
      </p>
      <p>
          During my time as a freelancer, I've had the privilege of collaborating with various clients to create web applications and landing pages that meet their needs and goals. From design to implementation, I am committed to delivering creative and functional solutions that showcase the identity of each project.
      </p>
      <p>
          My background in chemical engineering has enriched my approach to web development, providing me with an analytical and problem-solving mindset to tackle complex challenges. I love merging my creativity with my technical ability to build memorable and effective digital experiences.
      </p>
      <p>
          In addition to my work as a web developer, I enjoy exploring new technologies and trends in this constantly evolving field. I'm always looking for opportunities to learn and grow, whether through challenging projects or inspiring collaborations.
      </p>
      <p>
          I'm excited to continue expanding my skills and contributing to the exciting world of web development. If you're looking for a committed, passionate, and experienced developer in the field, I'd be delighted to collaborate with you on your next project!
      </p>
    </div>
    <div class="contact-section" id="contact">
      <h2 id="contact">Contact</h2>
      <p>
        I'm always happy to connect with new people and discuss potential projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out to me using the information below. <a href="mailto:nelsonubac90@gmail.com">E-mail</a>
      </p>
      <a href="https://www.linkedin.com/in/nelson-enrique-ubac-jimenez-6b1996118/" target="_blank"><img src="https://img.icons8.com/ios/100/linkedin.png" alt="Icono de LinkedIn"></a>
      <a href="https://twitter.com/necho1122" target="_blank"><img src="https://img.icons8.com/ios/100/twitter.png" alt="Icono de Twitter"></a>
      <a href="https://www.facebook.com/nelson.ubac" target="_blank"><img src="https://img.icons8.com/ios/100/facebook.png" alt="Icono de Facebook"></a>
      <a href="https://wa.me/5554981156815" target="_blank"><img src="https://img.icons8.com/ios/100/whatsapp.png" alt="Icono de Whatsapp"></a>
      <a href="https://t.me/necho1122" target="_blank"><img src="https://img.icons8.com/ios/100/telegram.png" alt="Icono de Telegram"></a>
      <a href="https://www.instagram.com/nelsonubac/" target="_blank"><img src="https://img.icons8.com/ios/100/instagram.png" alt="Icono de instagram"></a></p>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 [Nelson, Dev]. Todos los derechos reservados.</p>
      </div>
    </footer>
</div>
`;
