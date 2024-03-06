import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="portfolio-container">
    <div class="portfolio-header">
      <div class="navbar">
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">About me</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <div class="portfolio-body">
      <div class="resume">
        <img src="/assets/images/nelson-ubac.jpeg" alt="Nelson Ubac" />
        <h1>Hi, I'm Nelson Ubac</h1>
        <p>Chemical engineer turned passionate web developer with <strong>1 year of freelance experience</strong>, inspired by crafting unique web applications.</p>
        <div class="resume-cta">
          <a href="#">Linkedin</a>
          <a href="#">GitHub</a>
          <a href="mailto:nelsonubac90@gmail.com">E-mail</a>
        </div>
      </div>
      <div class="experience-section">
        <h2>Experience</h2>
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>Freelance Web Developer</h3>
            <p style="font-size: 0.9em">2022 - Present</p>
          </div>
          <p>Developed and maintained web applications for clients, including a personal blog, a portfolio website, and a web application for surveys data hosts.</p>
        </div>
        <div class="experience-item">
          <div class="experience-item-header">
            <h3>experience 2</h3>
            <p style="font-size: 0.9em">2022 - Present</p>
          </div>
          <p>Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub. </p>
        </div>
      </div>
    </div>
    <div class="projects-section">
        <h2>projects</h2>
        <div class="projects-item">
          <div class="projects-item-header">
            <h3>Freelance Web Developer</h3>
            <p style="font-size: 0.9em">2022 - Present</p>
          </div>
          <p>Developed and maintained web applications for clients, including a personal blog, a portfolio website, and a web application for surveys data hosts.</p>
        </div>
      </div>
  </div>
`;
