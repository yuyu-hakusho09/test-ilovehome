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

    openNav.addEventListener("click", function(event) {
        event.preventDefault(); // Impedire il comportamento predefinito del link
        document.body.classList.add("no-scroll"); // Aggiungere la classe "clicked"
    });


    closeNav.addEventListener("click", function() {
        document.body.classList.remove("no-scroll");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.getElementById("year");
    var currentYear = new Date().getFullYear();

    yearSpan.textContent = currentYear;
  });



