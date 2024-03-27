"use strict";

const { i18nextXHRBackend, i18nextBrowserLanguageDetector } = window;
let skillsLoaded = false;

// Fetch for skills translate json
function loadSkills(language) {
  fetch(`data/skills_${language}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error loading skills data");
      }
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector("#skills .container");
      container.innerHTML = "";

      // Add "My skills"
      const heading = document.createElement("h2");
      heading.textContent = i18next.t("my-skills");
      container.appendChild(heading);

      createFromJSON(data, "#skills .container", false);
    })
    .catch((error) => console.error("Error loading skills:", error));
}

// Fetch for projects translate json
let portfolioLoaded = false;

function loadPortfolio(language) {
  fetch(`data/portfolio_${language}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error loading portfolio data");
      }
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector("#portfolio .container");
      container.innerHTML = "";

      // Add "My projects"
      const heading = document.createElement("h2");
      heading.textContent = i18next.t("my-projects");
      container.appendChild(heading);
      const buttonLabel = i18next.t("btn");
      createFromJSON(data, "#portfolio .container", true, buttonLabel);
    })
    .catch((error) => console.error("Error loading portfolio:", error));
}

// Translate from html
i18next.use(i18nextXHRBackend).init(
  {
    fallbackLng: "fr",
    debug: true,

    resources: {
      en: {
        translation: {
          "navbar.home": "Home",
          "navbar.about": "About",
          "navbar.skills": "Skills",
          "navbar.portfolio": "Portfolio",
          "navbar.contact": "Contact",
          "hero.title":
            "Hello, my name is Larionov Etienne and I am an applications tester.",
          "my-skills": "My skills",
          "my-projects": "My projects",
          contact: "Contact me",
          phone: "Phone",
          email: "Email address",
          btn: "See more",
          about_me_paragraph1:
            "Hello! My name is Larionov Etienne and I recently completed the " +
            '"Software Tester" course on the "OpenClassrooms" platform, and I am now actively seeking opportunities to start my career in the field of software testing.' +
            " During my training, I acquired fundamental knowledge and practical skills. I mastered testing methods, automation tools, understood the" +
            " importance of quality control, and effective defect identification. My goal is to start my career in software testing and apply my knowledge and skills in practice. " +
            "I am looking for an opportunity to join a team where I can learn, grow, and contribute to the development of quality software products.",
          about_me_paragraph2:
            " Below, you can discover my projects and skills that I have acquired during my training.",
          card1: "Functional tests",
          card1_description:
            "This project is about functional testing of a web application using test cases. It was also necessary to add one's own exploratory tests and find the maximum number of bugs.",
          card2: "Carry out a test campaign",
          card2_description:
            "This project provides testing skills, documentation of identified issues in Jira, and report writing for conducted testing. From a technical standpoint, this project introduces the Docker testing environment and the Postman API tool.",
          card3: "Create a website development plan",
          card3_description:
            "This project has given me valuable experience in planning website development. I learned how to create technical specifications, keep up with the latest trends and technologies, use project management tools like Jira and a Kanban board, and create presentations to showcase technical solutions and website development plans.",
          card4: "Design a test strategy",
          card4_description:
            "After completing this project, I gained skills in planning and conducting testing. I learned how to analyze functional specifications of applications, develop testing strategies, plan testing according to the development cycle, create detailed technical test documents, and use specialized tools for project management and testing. This project allowed me to improve my testing skills and confidently apply them in my professional work.",
        },
      },
      fr: {
        translation: {
          "navbar.home": "Accueil",
          "navbar.about": "A propos",
          "navbar.skills": "Compétences",
          "navbar.portfolio": "Portfolio",
          "navbar.contact": "Contact",
          "hero.title":
            "Bonjour, je m'appelle Larionov Etienne et je suis testeur d'applications.",
          "my-skills": "Mes compétences",
          "my-projects": "Mes projets",
          contact: "Contactez-moi",
          phone: "Téléphone",
          email: "Adresse email",
          btn: "Voir plus",
          about_me_paragraph1:
            "Salut! Je m'appelle Larionov Etienne et j'ai récemment terminé\n" +
            '                        la formation "Testeur Logiciel" sur la plateforme\n' +
            '                        "OpenClassrooms" et je suis maintenant activement à la recherche\n' +
            "                        d'opportunités pour commencer ma carrière dans le domaine du\n" +
            "                        test de logiciels. Au cours de ma formation, j'ai acquis des\n" +
            "                        connaissances fondamentales et des compétences pratiques dans le\n" +
            "                        domaine. J'ai maîtrisé les méthodes de\n" +
            "                        test, les outils d'automatisation, compris l'importance du\n" +
            "                        contrôle de la qualité et de la recherche efficace de défauts.\n" +
            "                        Mon objectif est de commencer ma carrière dans le domaine du\n" +
            "                        test de logiciels et d'appliquer mes connaissances et\n" +
            "                        compétences dans la pratique. Je recherche une opportunité de\n" +
            "                        rejoindre une équipe où je pourrai apprendre, évoluer et\n" +
            "                        contribuer au développement d'un produit logiciel de qualité.",
          about_me_paragraph2:
            " Vous pouvez découvrir ci-dessous mes projets et compétences que\n" +
            "                        j'ai acquises au cours de ma formation.",
          card1: "Les tests fonctionnels",
          card1_description:
            "  Ce projet concerne les tests fonctionnels d'une application\n" +
            "                            web à l'aide de cahier de recette. Il fallait également ajouter ses\n" +
            "                            propres tests exploratoires et trouver le\n" +
            "                            maximum de bugs.",
          card2: "Menez une campagne de tests",
          card2_description:
            "Ce projet fournit des compétences en matière de tests, de\n" +
            "                  documentation des problèmes trouvés dans Jira, et de rédaction\n" +
            "                  de rapports de test. Sur le plan technique, ce projet\n" +
            "                  introduit l'environnement de test Docker et l'outil de travail\n" +
            "                  avec l'API Postman.",
          card3: "Planifiez le développement du site",
          card3_description:
            "   Ce projet m'a donné une précieuse expérience dans la\n" +
            "                            planification du développement d'un site web. J'ai appris à\n" +
            "                            créer des spécifications techniques, à suivre les dernières\n" +
            "                            tendances et technologies, à utiliser des outils de gestion de\n" +
            "                            projet tels que Jira et un tableau Kanban, ainsi qu'à créer\n" +
            "                            des présentations pour présenter des solutions techniques et\n" +
            "                            des plans de développement de sites web.",
          card4: "Concevez une stratégie de test",
          card4_description:
            " Après la réalisation de ce projet, j'ai acquis des compétences\n" +
            "                  en planification et réalisation de tests. J'ai appris à\n" +
            "                  analyser les spécifications fonctionnelles des applications, à\n" +
            "                  élaborer des stratégies de test, à planifier les tests en\n" +
            "                  fonction du cycle de développement, à créer des documents\n" +
            "                  techniques détaillés pour les tests, et à utiliser des outils\n" +
            "                  spécialisés pour la gestion de projets et les tests. Ce projet\n" +
            "                  m'a permis d'améliorer mes compétences en matière de test et\n" +
            "                  de les appliquer avec assurance dans mon travail\n" +
            "                  professionnel.",
        },
      },
    },
  },

  function (err) {
    if (err) {
      console.error("Error initializing i18next:", err);
    } else {
      updateTranslations();
      if (!skillsLoaded) {
        loadSkills(i18next.language || "en");
        skillsLoaded = true;
      }
      if (!portfolioLoaded) {
        loadPortfolio(i18next.language || "en");
        portfolioLoaded = true;
      }
    }
  }
);

function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    element.textContent = i18next.t(element.getAttribute("data-i18n"));
  });
}

const changeLanguage = () => {
  let languageButton = document.getElementById("languageButton");
  let currentLanguage = languageButton.querySelector("span").textContent;
  if (currentLanguage === "Français") {
    // Переключаем на английский
    languageButton.querySelector("span").textContent = "English";
    i18next.changeLanguage("fr", () => {
      updateTranslations();
      loadSkills("fr");
      loadPortfolio("fr");
    });
  } else {
    // Switch "french"
    languageButton.querySelector("span").textContent = "Français";
    i18next.changeLanguage("en", () => {
      updateTranslations();
      loadSkills("en");
      loadPortfolio("en");
    });
  }
};

// setting lang button for begin
document.addEventListener("DOMContentLoaded", function () {
  const languageButton = document.getElementById("languageButton");
  const currentLanguage = i18next.language || "en";
  if (currentLanguage === "fr") {
    languageButton.querySelector("span").textContent = "English";
  } else {
    languageButton.querySelector("span").textContent = "Français";
  }
  languageButton.addEventListener("click", changeLanguage);
});

//Slow ap.text
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".hero_title");
  text.classList.add("show");
});
