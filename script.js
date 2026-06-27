document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = {
        'hakkinda-link': 'hakkinda',
        'yaklasim-link': 'yaklasim',
        'iletisim-link': 'iletisim',
        'uzmanlik-alanlari-link': 'uzmanlik-alanlari',
        'hakkinda-link-mobil': 'hakkinda',
        'yaklasim-link-mobil': 'yaklasim',
        'iletisim-link-mobil': 'iletisim',
        'uzmanlik-alanlari-link-mobil': 'uzmanlik-alanlari'
    };

    Object.entries(menuLinks).forEach(([linkId, sectionId]) => {
        const link = document.getElementById(linkId);
        const section = document.getElementById(sectionId);

        if (!link || !section) return;

        link.addEventListener('click', (e) => {
            e.preventDefault();

            const top = section.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        });
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const isMobileLink = linkId.includes('mobil');
            const mobileMenu = document.getElementById('mobile-menu');

            if (isMobileLink && mobileMenu) {
                mobileMenu.hidden = true;
            }

            const top = section.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        });
    });
});

