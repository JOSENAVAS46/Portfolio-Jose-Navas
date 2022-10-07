const toggleTheme = document.getElementById("toggle_theme");
const toggleIcon = document.getElementById("toggle_icon");
const toggleText = document.getElementById("toggle_text");

const toggleColors = document.getElementById("toggle_colors");

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    if(toggleIcon.src.includes("moon.svg")){
        toggleIcon.src= "assets/icons/sun.svg";
        toggleText.textContent = "Ligth Mode";
    }
    else{
        toggleIcon.src= "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
    }

});

toggleColors.addEventListener("click",(e)=>{
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
});