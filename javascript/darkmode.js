document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    htmlElement.classList.add(savedTheme);
    themeToggleButton.innerText = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";

    // Toggle theme on button click
    themeToggleButton.addEventListener("click", () => {
        const isDarkMode = htmlElement.classList.toggle("dark-mode");
        htmlElement.classList.toggle("light-mode", !isDarkMode);
        themeToggleButton.innerText = isDarkMode ? "Light Mode" : "Dark Mode";

        // Save theme to local storage
        localStorage.setItem("theme", isDarkMode ? "dark-mode" : "light-mode");
    });
});
