document.addEventListener('DOMContentLoaded', () => {

    console.log('Anan Services Loaded');

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener('click', function(e) {

            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        });

    });

});
