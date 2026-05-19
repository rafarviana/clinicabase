const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');

        const section = document.querySelector(id);

        window.scrollTo({
            top: section.offsetTop - 80,
            behavior:'smooth'
        });

    });

});