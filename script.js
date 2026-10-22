/* =========================================================
   Anas Barkallah — CV numérique
   JavaScript vanilla : langue FR/EN, menu mobile,
   lien actif de navigation, année du pied de page.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 1. Traductions ----------
     Chaque clé correspond à un attribut dans index.html :
     - data-i18n        → texte de l'élément
     - data-i18n-alt    → attribut alt
     - data-i18n-aria   → attribut aria-label
     - data-i18n-content→ attribut content (balise meta)
  */
  var translations = {
    fr: {
      "meta.title": "Anas Barkallah — CV numérique",
      "meta.description": "CV numérique d'Anas Barkallah, étudiant en troisième année en systèmes embarqués et développement mobile à l'ISET Radès.",

      "a11y.skip": "Aller au contenu principal",
      "a11y.newTab": "(s'ouvre dans un nouvel onglet)",

      "nav.brandLabel": "Anas Barkallah — accueil",
      "nav.label": "Navigation principale",
      "nav.open": "Ouvrir le menu",
      "nav.close": "Fermer le menu",
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.experience": "Expériences",
      "nav.projects": "Projets",
      "nav.education": "Formation",
      "nav.contact": "Contact",
      "lang.group": "Choix de la langue",

      "hero.eyebrow": "Étudiant en 3ᵉ année · ISET Radès",
      "hero.role": "Systèmes embarqués & développement mobile",
      "hero.intro": "Étudiant curieux, j'explore plusieurs domaines techniques — de l'électronique embarquée au développement de jeux 2D — avec une envie constante d'apprendre et de progresser.",
      "hero.ctaProjects": "Voir mes projets",
      "hero.photoAlt": "Photo de profil d'Anas Barkallah",
      "hero.caption": "Systèmes embarqués",

      "about.title": "À propos",
      "about.p1": "Je suis étudiant en troisième année en systèmes embarqués et développement mobile à l'ISET Radès.",
      "about.p2": "Je suis encore en pleine construction de mon parcours : j'explore différents domaines techniques pour découvrir ceux qui me correspondent le mieux. Chaque expérience — stage, maintenance technique, robotique, jeux 2D — m'apprend quelque chose de nouveau.",
      "about.goalTitle": "Objectif professionnel",
      "about.goal": "Mon orientation n'est pas encore définie. Pour l'instant, mon objectif est de continuer à apprendre, de consolider mes bases techniques et de gagner en expérience à travers des projets concrets.",
      "about.p3": "En dehors des études, j'aime lire des manhua et regarder des anime.",
      "about.factField": "Formation",
      "about.factFieldValue": "Systèmes embarqués & développement mobile",
      "about.factLevel": "Niveau",
      "about.factLevelValue": "3ᵉ année",
      "about.factSchool": "Établissement",
      "about.factInterests": "Centres d'intérêt",
      "about.factInterestsValue": "Manhua, anime",

      "skills.title": "Compétences",
      "skills.langTitle": "Langages de programmation",
      "skills.webTitle": "Web & bases de données",
      "skills.embTitle": "Embarqué & électronique",
      "skills.toolsTitle": "Outils, systèmes & frameworks",
      "skills.domainsTitle": "Domaines explorés",
      "skills.domain1": "Systèmes embarqués",
      "skills.domain2": "Robotique de base",
      "skills.domain3": "Jeux mobiles 2D",
      "skills.domain4": "Serveur de sauvegarde",
      "skills.domain5": "Maintenance technique",
      "skills.softTitle": "Compétences transversales",
      "skills.soft1": "Curiosité",
      "skills.soft2": "Travail en équipe",
      "skills.soft3": "Adaptabilité",

      "exp.title": "Expériences",
      "exp.sama.role": "Stage",
      "exp.sama.desc": "Participation à la mise en place d'un serveur de sauvegarde destiné aux données de l'entreprise.",
      "exp.sama.tag1": "Serveur de sauvegarde",
      "exp.sama.tag2": "Données d'entreprise",
      "exp.somacs.role": "Maintenance technique",
      "exp.somacs.desc": "Intervention sur la réparation d'équipements et de machines de garage.",
      "exp.somacs.tag1": "Maintenance",
      "exp.somacs.tag2": "Équipements de garage",
      "exp.robotica.role": "Jeux mobiles 2D & robotique de base",
      "exp.robotica.desc": "Participation au développement de jeux mobiles en 2D et à la construction de robots simples, notamment un robot télécommandé et un robot suiveur de ligne.",
      "exp.robotica.tag1": "Jeux mobiles 2D",
      "exp.robotica.tag2": "Robot télécommandé",
      "exp.robotica.tag3": "Robot suiveur de ligne",

      "projects.title": "Projets",
      "projects.githubLink": "Voir mon GitHub",
      "projects.wifi.kind": "Systèmes embarqués",
      "projects.wifi.desc": "Projet réalisé avec une carte ESP32, consacré — comme son nom l'indique — à la surveillance des canaux Wi-Fi.",
      "projects.robotica.kind": "Robotica",
      "projects.robotica.title": "Jeux mobiles 2D & robotique de base",
      "projects.robotica.desc": "Travaux réalisés dans le cadre de mon expérience chez Robotica : participation au développement de jeux mobiles en 2D et à la construction d'un robot télécommandé et d'un robot suiveur de ligne.",
      "projects.robotica.tag1": "Jeux 2D",
      "projects.robotica.tag2": "Robotique",
      "projects.robotica.link": "Voir l'expérience Robotica",

      "edu.title": "Formation",
      "edu.current": "En cours",
      "edu.field": "Systèmes embarqués & développement mobile",
      "edu.level": "Étudiant en troisième année.",

      "contact.title": "Contact",
      "contact.intro": "Le meilleur moyen de suivre mon travail est mon profil GitHub. Vous pouvez aussi m'écrire par e-mail ou me contacter sur Discord.",
      "contact.discordValue": "Voir mon profil Discord",

      "common.domains": "Domaines",
      "common.tech": "Technologies",

      "footer.built": "Site réalisé en HTML, CSS et JavaScript.",
      "footer.top": "Retour en haut"
    },

    en: {
      "meta.title": "Anas Barkallah — Digital CV",
      "meta.description": "Digital CV of Anas Barkallah, third-year Embedded Systems & Mobile Development student at ISET Radès.",

      "a11y.skip": "Skip to main content",
      "a11y.newTab": "(opens in a new tab)",

      "nav.brandLabel": "Anas Barkallah — home",
      "nav.label": "Main navigation",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "lang.group": "Language selection",

      "hero.eyebrow": "Third-year student · ISET Radès",
      "hero.role": "Embedded Systems & Mobile Development",
      "hero.intro": "A curious student exploring several technical fields — from embedded electronics to 2D game development — with a constant drive to learn and improve.",
      "hero.ctaProjects": "View my projects",
      "hero.photoAlt": "Profile photo of Anas Barkallah",
      "hero.caption": "Embedded Systems",

      "about.title": "About",
      "about.p1": "I am a third-year Embedded Systems & Mobile Development student at ISET Radès.",
      "about.p2": "I am still shaping my path: I am exploring different technical fields to find the ones that suit me best. Every experience — internship, technical maintenance, robotics, 2D games — teaches me something new.",
      "about.goalTitle": "Career objective",
      "about.goal": "My career direction is not yet defined. For now, my goal is to keep learning, strengthen my technical foundations, and gain experience through hands-on projects.",
      "about.p3": "Outside of my studies, I enjoy reading manhua and watching anime.",
      "about.factField": "Field of study",
      "about.factFieldValue": "Embedded Systems & Mobile Development",
      "about.factLevel": "Level",
      "about.factLevelValue": "Third year",
      "about.factSchool": "Institution",
      "about.factInterests": "Interests",
      "about.factInterestsValue": "Manhua, anime",

      "skills.title": "Skills",
      "skills.langTitle": "Programming languages",
      "skills.webTitle": "Web & databases",
      "skills.embTitle": "Embedded & electronics",
      "skills.toolsTitle": "Tools, systems & frameworks",
      "skills.domainsTitle": "Fields explored",
      "skills.domain1": "Embedded systems",
      "skills.domain2": "Basic robotics",
      "skills.domain3": "2D mobile games",
      "skills.domain4": "Backup server",
      "skills.domain5": "Technical maintenance",
      "skills.softTitle": "Soft skills",
      "skills.soft1": "Curiosity",
      "skills.soft2": "Teamwork",
      "skills.soft3": "Adaptability",

      "exp.title": "Experience",
      "exp.sama.role": "Internship",
      "exp.sama.desc": "Took part in setting up a backup server for the company's data.",
      "exp.sama.tag1": "Backup server",
      "exp.sama.tag2": "Company data",
      "exp.somacs.role": "Technical maintenance",
      "exp.somacs.desc": "Worked on repairing garage equipment and machines.",
      "exp.somacs.tag1": "Maintenance",
      "exp.somacs.tag2": "Garage equipment",
      "exp.robotica.role": "2D mobile games & basic robotics",
      "exp.robotica.desc": "Took part in developing 2D mobile games and building simple robots, including a remote-controlled robot and a line-following robot.",
      "exp.robotica.tag1": "2D mobile games",
      "exp.robotica.tag2": "Remote-controlled robot",
      "exp.robotica.tag3": "Line-following robot",

      "projects.title": "Projects",
      "projects.githubLink": "View my GitHub",
      "projects.wifi.kind": "Embedded systems",
      "projects.wifi.desc": "A project built around an ESP32 board, focused — as its name suggests — on monitoring Wi-Fi channels.",
      "projects.robotica.kind": "Robotica",
      "projects.robotica.title": "2D mobile games & basic robotics",
      "projects.robotica.desc": "Work carried out during my experience at Robotica: contributing to 2D mobile game development and building a remote-controlled robot and a line-following robot.",
      "projects.robotica.tag1": "2D games",
      "projects.robotica.tag2": "Robotics",
      "projects.robotica.link": "See the Robotica experience",

      "edu.title": "Education",
      "edu.current": "In progress",
      "edu.field": "Embedded Systems & Mobile Development",
      "edu.level": "Third-year student.",

      "contact.title": "Contact",
      "contact.intro": "The best way to follow my work is my GitHub profile. You can also email me or reach me on Discord.",
      "contact.discordValue": "View my Discord profile",

      "common.domains": "Fields",
      "common.tech": "Technologies",

      "footer.built": "Built with HTML, CSS and JavaScript.",
      "footer.top": "Back to top"
    }
  };

  var DEFAULT_LANG = "fr";
  var STORAGE_KEY = "cv-lang";
  var currentLang = DEFAULT_LANG;

  var menuToggle = document.querySelector(".menu-toggle");
  var siteNav = document.getElementById("site-nav");
  var header = document.querySelector(".site-header");

  /* ---------- 2. Stockage de la langue (facultatif) ---------- */
  function readStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* Stockage indisponible : la langue reste valable pour la page en cours. */
    }
  }

  function t(key) {
    var dict = translations[currentLang] || translations[DEFAULT_LANG];
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
  }

  /* ---------- 3. Changement de langue (sans rechargement) ---------- */
  function applyAttr(selector, dataAttr, targetAttr) {
    document.querySelectorAll(selector).forEach(function (el) {
      var value = t(el.getAttribute(dataAttr));
      if (value !== null) {
        el.setAttribute(targetAttr, value);
      }
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = DEFAULT_LANG;
    }
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    // Textes : textContent uniquement (aucune insertion HTML)
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(el.getAttribute("data-i18n"));
      if (value !== null) {
        el.textContent = value;
      }
    });

    applyAttr("[data-i18n-alt]", "data-i18n-alt", "alt");
    applyAttr("[data-i18n-aria]", "data-i18n-aria", "aria-label");
    applyAttr("[data-i18n-content]", "data-i18n-content", "content");

    document.title = t("meta.title");

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    // Le libellé du bouton de menu dépend de son état
    updateMenuLabel();
    storeLang(lang);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  /* ---------- 4. Menu mobile ---------- */
  function isMenuOpen() {
    return menuToggle.getAttribute("aria-expanded") === "true";
  }

  function updateMenuLabel() {
    menuToggle.setAttribute("aria-label", t(isMenuOpen() ? "nav.close" : "nav.open"));
  }

  function setMenu(open) {
    menuToggle.setAttribute("aria-expanded", String(open));
    siteNav.classList.toggle("is-open", open);
    updateMenuLabel();
  }

  menuToggle.addEventListener("click", function () {
    setMenu(!isMenuOpen());
  });

  // Fermer le menu après un clic sur un lien
  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isMenuOpen()) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Fermer en cliquant en dehors du menu
  document.addEventListener("click", function (event) {
    if (isMenuOpen() && !siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenu(false);
    }
  });

  // Refermer le menu si l'écran repasse en mode bureau
  var desktopQuery = window.matchMedia("(min-width: 901px)");
  function onDesktopChange(e) {
    if (e.matches) {
      setMenu(false);
    }
  }
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", onDesktopChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(onDesktopChange);
  }

  /* ---------- 5. En-tête au défilement ---------- */
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 6. Lien de navigation actif ---------- */
  var navLinks = Array.prototype.slice.call(siteNav.querySelectorAll('a[href^="#"]'));
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          var id = "#" + entry.target.id;
          navLinks.forEach(function (link) {
            var active = link.getAttribute("href") === id;
            link.classList.toggle("is-active", active);
            if (active) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- 7. Année du pied de page ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- 8. Initialisation ---------- */
  setLanguage(readStoredLang() || DEFAULT_LANG);
})(); 