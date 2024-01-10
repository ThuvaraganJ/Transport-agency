document.addEventListener('DOMContentLoaded', function () {
    const midNav = document.getElementById("navbar-example2");
    const topNavHeight = document.getElementById("navbar1").offsetHeight;

    function handleScroll() {
        if (window.scrollY > topNavHeight) {
            midNav.classList.add("fixed");
        } else {
            midNav.classList.remove("fixed");
        }
    }

    window.addEventListener("scroll", handleScroll);

    const sectionLinks = document.querySelectorAll('.nav-link[href^="#scrollspyHeading"]');
    sectionLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = window.innerHeight / 2 - targetSection.clientHeight / 2;

            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth',
            });
        });
    });

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-example2',
    });

    midNav.addEventListener('activate.bs.scrollspy', function () {
        const activeElement = midNav.querySelector('.nav-link.active');
        if (activeElement) {
            activeElement.classList.remove('active');
        }
    });
});

var card = document.querySelector('.card-one');
  var animationDuration = 10000;
  var pauseDuration = 3000;
  
  setInterval(function() {
    card.classList.add('paused');
    setTimeout(function() {
      card.classList.remove('paused');
    }, pauseDuration);
  }, animationDuration);
