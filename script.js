const translations = {
  en: {
    welcome: "Welcome to Nazar Travel",
    home: "Home",
    tours: "Tours",
    service: "Service",
    contacts: "Contacts",
    about: "About us",
    samarkand: "Uzbekistan - Samarkand",
    tashkent: "Uzbekistan - Tashkent",
    bukhara: "Uzbekistan - Bukhara",
    tours_title: "Tours to Uzbekistan",
    search: "Search for a travel",
    foods: "Foods",
    cities: "Cities",
    plov: "Plov",
    samsa: "Samsa",
    lagman: "Lagman",
    shashlik: "Shashlik"
  },
  ru: {
    welcome: "Добро пожаловать в Nazar Travel",
    home: "Главная",
    tours: "Туры",
    service: "Услуги",
    contacts: "Контакты",
    about: "О нас",
    samarkand: "Узбекистан — Самарканд",
    tashkent: "Узбекистан — Ташкент",
    bukhara: "Узбекистан — Бухара",
    tours_title: "Туры в Узбекистан",
    search: "Поиск путешествия",
    foods: "Блюда",
    cities: "Города",
    plov: "Плов",
    samsa: "Самса",
    lagman: "Лагман",
    shashlik: "Шашлык"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dict[key]) el.textContent = dict[key];
  });

  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  // Язык
  const toggle = document.getElementById("languageToggle");
  const langList = document.getElementById("languageList");

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    langList.style.display = langList.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function () {
    langList.style.display = "none";
  });

  document.querySelectorAll(".translate-list a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = link.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Устанавливаем язык из localStorage
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    setLanguage(savedLang);
  }

  // Popup
  const navLinks = document.querySelectorAll(".nav-link");
  const allPopups = document.querySelectorAll(".popup-below-nav");

  navLinks.forEach(link => {
    const popupId = link.getAttribute("data-popup-id");
    const popup = document.getElementById(popupId);

    link.addEventListener("mouseenter", () => {
      allPopups.forEach(p => p.style.display = "none");
      if (popup) popup.style.display = "flex";
    });

    link.addEventListener("mouseleave", () => {
      if (popup) {
        popup.addEventListener("mouseenter", () => popup.style.display = "flex");
        popup.addEventListener("mouseleave", () => popup.style.display = "none");
        setTimeout(() => {
          if (!popup.matches(':hover') && !link.matches(':hover')) {
            popup.style.display = "none";
          }
        }, 200);
      }
    });
  });
});