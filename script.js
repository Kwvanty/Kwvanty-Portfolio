const translations = {
  en: {
    navAbout:"About",navProjects:"Projects",navStack:"Stack",navContact:"Contact",available:"Open to opportunities",
    eyebrow:"INDEPENDENT DEVELOPER · UKRAINE",heroLine1:"Turning ideas",heroLine2:"into <em>working</em>",heroLine3:"software.",
    heroText:"I'm Kwvanty — a Python developer focused on building desktop tools, game-related software and ambitious independent projects.",
    explore:"Explore projects",moreAbout:"More about me",heroMeta:"Curiosity first. Build, test, improve.",
    aboutKicker:"THE DEVELOPER",aboutSide:"A little context",aboutTitle:"Curious by nature.<br><span>Developer by choice.</span>",
    aboutText:"I enjoy taking an idea from a rough sketch to a real, usable product. I work mainly with Python and explore interfaces, automation, game tooling and graphics.",
    aboutText2:"This portfolio is a living overview of what I'm learning and building — with room for the next experiment.",
    projectsKicker:"SELECTED WORK",projectsSide:"Experiments & products",projectsTitle:"Things I'm <span>building.</span>",
    projectsIntro:"A selection of independent projects, each built to explore an idea and make it real.",
    maceType:"DESKTOP APP · PYTHON",maceDesc:"A customizable Minecraft launcher focused on a flexible interface, useful tools and a connected player experience.",
    inDevelopment:"IN DEVELOPMENT",engineType:"GRAPHICS · PYTHON",engineDesc:"An experimental graphics engine project exploring rendering architecture, tools and visual effects.",
    projectNote:"More projects will appear here as they become ready to share.",stackKicker:"TOOLS & TECHNOLOGIES",stackSide:"Always learning",
    stackTitle:"My current <span>toolbox.</span>",stackText:"The technologies I use to prototype ideas, build interfaces and bring projects to life.",
    contactKicker:"GET IN TOUCH",contactSide:"Let's connect",contactEyebrow:"HAVE AN IDEA?",contactTitle:"Let's make<br><span>something useful.</span>",
    contactText:"Have a project, question or collaboration idea? Find me through the links below.",
    linksHint:"Update these links in script.js with your real contacts.",footerMade:"Designed & built with curiosity."
  },
  uk: {
    navAbout:"Про мене",navProjects:"Проєкти",navStack:"Технології",navContact:"Контакти",available:"Відкритий до пропозицій",
    eyebrow:"НЕЗАЛЕЖНИЙ РОЗРОБНИК · УКРАЇНА",heroLine1:"Перетворюю ідеї",heroLine2:"на <em>працюючі</em>",heroLine3:"програми.",
    heroText:"Я — Kwvanty, Python-розробник. Створюю десктопні інструменти, програмне забезпечення для ігор та власні амбітні проєкти.",
    explore:"Переглянути проєкти",moreAbout:"Більше про мене",heroMeta:"Спочатку цікавість. Створюй, тестуй, вдосконалюй.",
    aboutKicker:"РОЗРОБНИК",aboutSide:"Трохи контексту",aboutTitle:"Допитливість — у характері.<br><span>Розробка — мій вибір.</span>",
    aboutText:"Мені подобається перетворювати ідею зі швидкого начерку на справжній, корисний продукт. Переважно працюю з Python та досліджую інтерфейси, автоматизацію, ігрові інструменти й графіку.",
    aboutText2:"Це портфоліо — живий огляд того, що я вивчаю та створюю. Тут завжди є місце для наступного експерименту.",
    projectsKicker:"ВИБРАНІ РОБОТИ",projectsSide:"Експерименти та продукти",projectsTitle:"Те, що я <span>створюю.</span>",
    projectsIntro:"Добірка власних проєктів, кожен із яких допомагає дослідити ідею та втілити її в життя.",
    maceType:"ДЕСКТОПНИЙ ЗАСТОСУНОК · PYTHON",maceDesc:"Гнучкий лаунчер Minecraft із широкими можливостями налаштування інтерфейсу, корисними інструментами та соціальними функціями.",
    inDevelopment:"У РОЗРОБЦІ",engineType:"ГРАФІКА · PYTHON",engineDesc:"Експериментальний проєкт графічного рушія для дослідження архітектури рендерингу, інструментів та візуальних ефектів.",
    projectNote:"Інші проєкти з'являться тут, коли будуть готові до презентації.",stackKicker:"ІНСТРУМЕНТИ Й ТЕХНОЛОГІЇ",stackSide:"Постійно навчаюся",
    stackTitle:"Мій поточний <span>інструментарій.</span>",stackText:"Технології, які допомагають мені перевіряти ідеї, створювати інтерфейси та втілювати проєкти.",
    contactKicker:"ЗВ'ЯЗАТИСЯ",contactSide:"Будьмо на зв'язку",contactEyebrow:"Є ІДЕЯ?",contactTitle:"Створімо<br><span>щось корисне.</span>",
    contactText:"Маєш ідею проєкту, запитання чи пропозицію співпраці? Знайди мене за посиланнями нижче.",
    linksHint:"Додай свої справжні контакти в script.js.",footerMade:"Створено з цікавістю та натхненням."
  }
};
let currentLang = "en";
const langSwitch = document.getElementById("langSwitch");
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  langSwitch.textContent = lang === "en" ? "UA" : "EN";
}
langSwitch.addEventListener("click", () => setLanguage(currentLang === "en" ? "uk" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

/*
  Add your real public contact URLs here.
  Example: github: "https://github.com/your-username"
*/
const CONTACT_LINKS = {
  github: "https://github.com/Kwvanty?tab=overview&from=2026-11-01&to=2026-11-06",
  telegram: "@Kwvanty",
  email: "Kwvantyromzes7@gmail.com"
};
document.querySelectorAll("[data-link]").forEach(link => {
  const value = CONTACT_LINKS[link.dataset.link];
  if (value) {
    link.href = value;
    if (!value.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Add your " + link.dataset.link + " link in CONTACT_LINKS inside script.js.");
    });
  }
});
