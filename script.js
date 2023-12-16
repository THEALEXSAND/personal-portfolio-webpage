const skillsContainer = document.getElementById("skills");

const createSkillCard = ({ name, image }) => {
	return `
            <article class="skills__card">
                <img src="img/${image}" alt="Logo ${name}">
                <h4>${name}</h4>
            </article>
            `;
};

const skillCards = [
	{ name: "HTML", image: "html-logo.png" },
	{ name: "CSS", image: "css-logo.png" },
	{ name: "JavaScript", image: "javascript-logo.png" },
	{ name: "Node.js", image: "node-js.png" },
	{ name: "SASS", image: "sass-logo.png" },
];

skillCards.forEach((skillCard) => {
	skillsContainer.innerHTML += createSkillCard(skillCard);
});

const header = document.querySelector("header");

const addHeaderShadow = () => {
	if (window.scrollY > 0) {
		header.classList.add("header__shadow");
	} else {
		header.classList.remove("header__shadow");
	}
};

window.addEventListener("scroll", () => {
	addHeaderShadow();
});

const headerSidebar = document.querySelector(".header__sidebar");

const openMenu = () => {
	headerSidebar.classList.toggle("open__menu");
};

document.getElementById("menu").addEventListener("mousedown", () => {
	openMenu();
});
