const toggleTheme = document.getElementById("toggle_theme");
const toggleIcon = document.getElementById("toggle_icon");
const toggleText = document.getElementById("toggle_text");

const toggleColors = document.getElementById("toggle_colors");

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.textContent = texts[section][value];
    }  
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.dataset.language);
});


toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Ligth Mode";
    }
    else {
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    }

});

toggleColors.addEventListener("click", (e) => {
    if(e.target.dataset.color != null){
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
    }
});
