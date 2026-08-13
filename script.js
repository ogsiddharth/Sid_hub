// ===============================
// SIDHUB - script.js
// ===============================

// Smooth reveal animation
const cards = document.querySelectorAll(".card, .btn");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .7s ease";

    observer.observe(card);

});

// ===============================
// Typing Effect
// ===============================

const title = document.querySelector(".tagline");

const text = "Building AI, Web & Real-world Solutions 🚀";

let i = 0;

title.innerHTML = "";

function typing(){

    if(i < text.length){

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,45);

    }

}

typing();


// ===============================
// Copy Email
// ===============================

const emailBtn = document.querySelector('a[href^="mailto"]');

emailBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    navigator.clipboard.writeText("mauryaji0115m@gmail.com");

    emailBtn.innerHTML =
    '<i class="fa-solid fa-check"></i> Email Copied';

    setTimeout(()=>{

        emailBtn.innerHTML =
        '<i class="fa-solid fa-envelope"></i> Email';

    },2000);

});


// ===============================
// Current Year
// ===============================

const footer = document.createElement("footer");

footer.innerHTML =
`© ${new Date().getFullYear()} SIDHUB • Made with ❤️ by Siddharth`;

document.body.appendChild(footer);



async function loadProjects() {
    const response = await fetch("projects.json");
    const projects = await response.json();

    const container = document.getElementById("projectContainer");

    projects.forEach(project => {

        const tech = project.tech.map(item =>
            `<span class="tech">${item}</span>`
        ).join("");

        container.innerHTML += `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="tech-stack">
                ${tech}
            </div>

            <div class="buttons">
                <a href="${project.live}" target="_blank">🚀 Live Demo</a>
                <a href="${project.github}" target="_blank">💻 GitHub</a>
            </div>
        </div>
        `;
    });
}

loadProjects();

container.innerHTML += `

<div class="project-card">

<div class="project-image">

<img src="https://placehold.co/600x350/1e293b/ffffff?text=${encodeURIComponent(project.title)}">

</div>

<div class="project-content">

<h3>${project.title}</h3>

<p>${project.description}</p>

<div class="tech-stack">

${tech}

</div>

<div class="buttons">

<a href="${project.live}" target="_blank">

🚀 Live

</a>

<a href="${project.github}" target="_blank">

💻 Code

</a>

</div>

</div>

</div>

`;