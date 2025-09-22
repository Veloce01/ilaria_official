
$(document).ready(function() {
    // Primo carosello (Carosello principale)
    $(".owl-carousel#carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $(".owl-carousel#carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});

    // Altri caroselli (Gli altri sotto le immagini)
    $(".owl-carousel:not(#carousel)").owlCarousel({
        items: 1, // Un solo elemento alla volta
        loop: true, // Loop per ripetere la sequenza
        margin: 10,
        nav: true, // Attiva la navigazione tra le immagini
        autoplay: true, // Disabilita autoplay
        autoplayTimeout: 3000
    });
});
// Applicare le animazioni quando l'utente scorre
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("#chi-siamo .col-md-6, .footer, #newsletter-social");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.animation = "none";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});

