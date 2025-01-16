document.addEventListener('DOMContentLoaded', function () {
  const addAnimationClass = (entries, observer, className) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add(className);
              observer.unobserve(entry.target); 
          }
      });
  };

  const options = {
      threshold: 0.1
  };

  const catalogObserver = new IntersectionObserver((entries, observer) => {
      addAnimationClass(entries, observer, 'catalog__image--animated');
  }, options);

  const descriptionObserver = new IntersectionObserver((entries, observer) => {
      addAnimationClass(entries, observer, 'catalog__description--animated');
  }, options);

  const portfolioObserver = new IntersectionObserver((entries, observer) => {
      addAnimationClass(entries, observer, 'catalog__portfolio--animated');
  }, options);

  const infoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add('info-list__item--animated');
              }, index * 100); 
              observer.unobserve(entry.target);
          }
      });
  }, options);

  const statsProfileObserver = new IntersectionObserver((entries, observer) => {
      addAnimationClass(entries, observer, 'stats__profile--animated');
  }, options);

  const statsSkillsObserver = new IntersectionObserver((entries, observer) => {
      addAnimationClass(entries, observer, 'stats__skills--animated');
  }, options);

  const projectsTitleObserver = new IntersectionObserver((entries, observer) => {
      addAnimationClass(entries, observer, 'projects__title--animated');
  }, options);

  const projectsItemsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add('projects-list__item--animated');
              }, index * 100);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  const catalogImage = document.querySelector('.catalog__image');
  const catalogDescription = document.querySelector('.catalog__description');
  const catalogPortfolio = document.querySelector('.catalog__portfolio');
  const infoItems = document.querySelectorAll('.info-list__item');
  const statsProfile = document.querySelector('.stats__profile');
  const statsSkills = document.querySelector('.stats__skills');
  const projectsTitle = document.querySelector('.projects__title');
  const projectsItems = document.querySelectorAll('.projects-list__item');

  if (catalogImage) {
      catalogObserver.observe(catalogImage);
  }

  if (catalogDescription) {
      descriptionObserver.observe(catalogDescription);
  }

  if (catalogPortfolio) {
      portfolioObserver.observe(catalogPortfolio);
  }

  infoItems.forEach(item => {
      infoObserver.observe(item);
  });

  if (statsProfile) {
      statsProfileObserver.observe(statsProfile);
  }

  if (statsSkills) {
      statsSkillsObserver.observe(statsSkills);
  }

  if (projectsTitle) {
      projectsTitleObserver.observe(projectsTitle);
  }

  projectsItems.forEach(item => {
      projectsItemsObserver.observe(item);
  });
});