document.addEventListener("DOMContentLoaded", function() {
    const openNav = document.getElementById("open-nav");
    const menu = document.getElementById("menu-toggle");
    const closeNav = document.getElementById("close-nav");

    openNav.addEventListener("click", function(event) {
        event.preventDefault(); // Impedire il comportamento predefinito del link
        menu.classList.add("open-menu"); // Aggiungere la classe "clicked"
    });

    closeNav.addEventListener("click", function(event) {
        event.preventDefault(); // Impedire il comportamento predefinito del link
        menu.classList.remove("open-menu"); // Aggiungere la classe "clicked"
    });
});



