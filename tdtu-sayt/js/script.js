/* TDTU AL — sahifaning o'z skriptlari.
   Bootstrap, karusel, menyu va forma kutubxonalari index.html'da CDN orqali ulanadi. */
(function () {
    'use strict';

    // Mobil menyuda bo'lim havolasi bosilganda menyuni yopish
    var menu = document.getElementById('navbarSupportedContent');
    if (menu) {
        menu.addEventListener('click', function (event) {
            var link = event.target.closest('a[href^="#"]');
            if (!link || link.getAttribute('href') === '#' || !menu.classList.contains('show')) {
                return;
            }
            if (window.bootstrap && window.bootstrap.Collapse) {
                window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
            } else {
                menu.classList.remove('show');
            }
        });
    }

    // Formada faqat probellardan iborat maydonlarni qabul qilmaslik
    var form = document.querySelector('#form03-4l form');
    if (form) {
        form.querySelectorAll('input[required], textarea[required]').forEach(function (field) {
            field.addEventListener('input', function () {
                field.setCustomValidity(field.value.trim() === '' ? "Iltimos, ushbu maydonni to'ldiring." : '');
            });
        });
    }

    // "Yuqoriga" tugmasi: sahifa boshiga silliq qaytish
    var toTop = document.querySelector('.scroll-top-link');
    if (toTop) {
        toTop.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();
