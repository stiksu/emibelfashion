document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Obține toate link-urile către div-uri cu ID-uri
    var linkuriCatreDivuri = document.querySelectorAll('a[href^="#"]');

    // Adaugă un eveniment de click pentru fiecare link
    linkuriCatreDivuri.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Oprește comportamentul implicit al link-ului (navigarea la altă pagină)
            event.preventDefault();

            // Obține ID-ul div-ului către care se face referire în atributul href
            var targetID = this.getAttribute("href").substring(1);

            // Obține div-ul țintă folosind ID-ul
            var divTinta = document.getElementById(targetID);

            // Derulează pagina la div-ul țintă
            if (divTinta) {
                divTinta.scrollIntoView({
                    behavior: "smooth" // Efect de scroll suave
                });
            }
        });
    });
});



























document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Aici poți adăuga logica pentru gestionarea datelor de la utilizatori și procesarea comenzii
    // De asemenea, poți utiliza XMLHttpRequest sau fetch API pentru a trimite datele la server.
    // Pentru acest exemplu, nu am inclus logica de gestionare a comenzii.
    alert('Comanda a fost plasată cu succes!'); // Mesaj de confirmare simplu
});




function toggleMenu() {
    var menu = document.querySelector('.menu-options');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}





const overlay = document.getElementById('overlay');
const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        overlay.style.display = 'block';
        const zoomedImage = document.getElementById('zoomed-img');
        zoomedImage.src = image.src;
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});






function deschideLink1() {
    window.open("https://www.example.com", "_blank");
}

function deschideLink2() {
    window.open("https://www.example.com", "_blank");
}



function deschideLink11() {
    window.open("https://www.example.com", "_blank");
}

function deschideLink21() {
    window.open("https://www.example.com", "_blank");
}