document.addEventListener('DOMContentLoaded', function() {
    let catalogImage = document.querySelector('.catalog__image');
    let catalogDescription = document.querySelector('.catalog__description');
    let catalogPortfolio = document.querySelector('.catalog__portfolio');
    let infoItems = document.querySelectorAll('.info-list__item');
    let statsProfile = document.querySelector('.stats__profile');
    let statsSkills = document.querySelector('.stats__skills');
    let projectsTitle = document.querySelector('.projects__title');
    let projectsItems = document.querySelectorAll('.projects-list__item');

    function isInViewport(element) {
      let rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    catalogImage.classList.add('catalog__image--animated');
    catalogDescription.classList.add('catalog__description--animated');
    catalogPortfolio.classList.add('catalog__portfolio--animated');
    function handleScroll() {

      infoItems.forEach(function(item, index) {
        if (isInViewport(item)) {
          setTimeout(function() {
            item.classList.add('info-list__item--animated');
          }, (index + 1) * 100);
        }
      });
      if (isInViewport(statsProfile)) {
        statsProfile.classList.add('stats__profile--animated');
      }
      if (isInViewport(statsSkills)) {
        statsSkills.classList.add('stats__skills--animated');
      }
      if (isInViewport(projectsTitle)) {
        projectsTitle.classList.add('projects__title--animated');
      }

      projectsItems.forEach(function (item, index) {
        if (isInViewport(item)) {
          setTimeout(function() {
            item.classList.add('projects-list__item--animated');
          }, (index + 1) * 100);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
  });