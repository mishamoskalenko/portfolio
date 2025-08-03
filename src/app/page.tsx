"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]');
      console.log('React useEffect - Found animated elements:', animatedElements.length);

      if (animatedElements.length === 0) {
        console.log('No animated elements found - this might be the issue');
        return;
      }

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Element intersecting:', entry.target);
            const el = entry.target;
            const isStaggered = el.hasAttribute('data-stagger');
            const index = Number((el as HTMLElement).dataset.index || 0);
            const delay = isStaggered ? index * 100 : 0;

            setTimeout(() => {
              el.classList.add('is-animated');
              console.log('Added is-animated class to:', el);
            }, delay);

            obs.unobserve(el);
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach((el) => {
        if (el.hasAttribute('data-stagger')) {
          const siblings = Array.from(el.parentElement?.querySelectorAll('[data-stagger]') || []);
          (el as HTMLElement).dataset.index = siblings.indexOf(el).toString();
        }
        observer.observe(el);
        console.log('Observing element:', el);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
      initAnimations();
    }
  }, []);

  return (
    <div className="page__body container">
      <header className="page__header header">
        <div className="header__catalog catalog">
          <div className="catalog__image" data-animate>
            <Image src="/avatar.png" alt="Mykhailo Moskalenko's avatar" width={337} height={380} priority  />
          </div>
          <div className="catalog__description description" data-animate>
            <div className="description__container">
              <h2 className="description__title">Frontend Developer</h2>
              <p className="description__subtitle">simple, stylish and logical</p>
            </div>
          </div>
          <div className="catalog__portfolio portfolio" data-animate>
            <div className="portfolio__container">
              <p className="portfolio__title">Resume</p>
              <a className="portfolio__link" href="https://www.linkedin.com/in/misha-moskalenko/" target="_blank"
                rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main info container">
        <h1 className="info__title">Mykhailo Moskalenko</h1>
        <ul className="info__list info-list">
          <li className="info-list__item info-list__item--1" data-animate data-stagger>France</li>
          <li className="info-list__item info-list__item--2" data-animate data-stagger><a
            className="info-list__link info-list__link--phone" href="tel:+33780450793" target="_blank"
            rel="noopener noreferrer">+33 (7) 80 45 07 93</a>
          </li>
          <li className="info-list__item info-list__item--6" data-animate data-stagger>
            <a className="info-list__link info-list__link--github" href="https://github.com/mishamoskalenko" target="_blank"
              rel="noopener noreferrer">GitHub</a>
          </li>
          <li className="info-list__item info-list__item--5" data-animate data-stagger>
            <a className="info-list__link info-list__link--linkedin" href="https://www.linkedin.com/in/misha-moskalenko/"
              target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="info-list__item info-list__item--4" data-animate data-stagger>
            <a className="info-list__link info-list__link--telegram" href="https://t.me/mishanyyyaaa" target="_blank"
              rel="noopener noreferrer">Telegram</a>
          </li>
          <li className="info-list__item info-list__item--3" data-animate data-stagger>
            <a className="info-list__link info-list__link--mail" href="mailto:misamoskalenko318@gmail.com" target="_blank"
              rel="noopener noreferrer">misamoskalenko318@gmail.com</a>
          </li>
        </ul>
        <section className="page__section stats">
          <div className="stats__profile profile" data-animate>
            <h2 className="profile__title">Profile</h2>
            <p className="profile__description">Hello, I am a frontend developer with experience in HTML, CSS, JavaScript, and
              React. I constantly work on my skills by creating my own projects and participating in various web
              development-related groups. <br></br>During my studies, I have created several projects such as a website about
              cryptocurrencies where I used React, React Router, SCSS, and Axios. I also made a task scheduling calendar
              using React, Typescript, Redux Toolkit, React Router, Axios, and Ant design. In addition, right now I am
              participating in a collaborative learning group on algorithms and web development.</p>
          </div>
          <div className="stats__skills skills" data-animate>
            <h2 className="skills__title">Skills</h2>
            <ul className="skills__list skills-list">
              <li className="skills-list__item">HTML</li>
              <li className="skills-list__item">CSS</li>
              <li className="skills-list__item">SCSS</li>
              <li className="skills-list__item">JavaScript</li>
              <li className="skills-list__item">Typescript</li>
              <li className="skills-list__item">React</li>
              <li className="skills-list__item">React Router</li>
              <li className="skills-list__item">Redux Toolkit</li>
              <li className="skills-list__item">GIT</li>
              <li className="skills-list__item">Axios</li>
              <li className="skills-list__item">Webpack</li>
              <li className="skills-list__item">Vite</li>
              <li className="skills-list__item">i18n</li>
              <li className="skills-list__item">Babel</li>
              <li className="skills-list__item">Jest</li>
              <li className="skills-list__item">RTL</li>
              <li className="skills-list__item">Cypress</li>
              <li className="skills-list__item">Storybook</li>
              <li className="skills-list__item">Loki</li>
              <li className="skills-list__item">GitHub</li>
              <li className="skills-list__item">GitHub Actions</li>
              <li className="skills-list__item">ESLint</li>
              <li className="skills-list__item">Stylelint</li>
              <li className="skills-list__item">English (B2) </li>
            </ul>
          </div>
        </section>
        <section className="page__section projects">
          <h2 className="projects__title" data-animate>My projects</h2>
          <ul className="projects__list projects-list">
            <li className="projects-list__item" data-animate data-stagger>
              <div>
                <Image className="projects-list__image" src="/blogging-platform.png" alt="Screenshot of the main page of the 'Blogging platform' web application." width={702.5} height={350} />
              </div>
              <div className="projects-list__text">
                <h3 className="projects-list__title">Blogging platform</h3>
                <p className="projects-list__description">Blogging platform web application using React, TypeScript, Redux
                  Toolkit(RTK Query), React Router, Axios, SCSS Modules, i18next, Headless UI, Webpack, Vite, Storybook,
                  Jest, React Testing Library & Cypress</p>
                <a className="projects-list__button" href="https://mishablogging-platform.netlify.app" target="_blank"
                  rel="noopener noreferrer">View</a>
              </div>
            </li>
            <li className="projects-list__item" data-animate data-stagger>
              <div>
                <Image className="projects-list__image" src="/calendar.png" alt="Screenshot of the 'Calendar' web application, showing a grid of events." width={702.5} height={350} />
              </div>
              <div className="projects-list__text">
                <h3 className="projects-list__title">Calendar</h3>
                <p className="projects-list__description">Calendar web application using React, Typescript, Redux Toolkit, React
                  Router, Axios, Ant design</p>
                <a className="projects-list__button" href="https://mishamoskalenko.github.io/calendar" target="_blank"
                  rel="noopener noreferrer">View</a>
              </div>
            </li>
            <li className="projects-list__item" data-animate data-stagger>
              <div>
                <Image className="projects-list__image" src="/cryptopin.png" alt="Screenshot of the 'Cryptopin' website, displaying a list of cryptocurrencies with their prices." width={702.5} height={350} />
              </div>
              <div className="projects-list__text">
                <h3 className="projects-list__title">Cryptopin</h3>
                <p className="projects-list__description">Cryptocurrency website with token tracker using React, React Router,
                  Axios</p>
                <a className="projects-list__button" href="https://mishamoskalenko.github.io/cryptopin" target="_blank"
                  rel="noopener noreferrer">View</a>
              </div>
            </li>
            <li className="projects-list__item" data-animate data-stagger>
              <div>
                <Image className="projects-list__image" src="/weather.png" alt="Screenshot of the 'Weather app', showing the weather forecast for a specific city." width={702.5} height={350} />
              </div>
              <div className="projects-list__text">
                <h3 className="projects-list__title">Weather app</h3>
                <p className="projects-list__description">Find out the weather app using React, Axios</p>
                <a className="projects-list__button" href="https://mishamoskalenko.github.io/weather-app" target="_blank"
                  rel="noopener noreferrer">View</a>
              </div>
            </li>
            <li className="projects-list__item" data-animate data-stagger>
              <div>
                <Image className="projects-list__image" src="/drink.png" alt="Screenshot of the 'Drink' website, a landing page for selling coffee drinks." width={702.5} height={350} />
              </div>
              <div className="projects-list__text">
                <h3 className="projects-list__title">Drink</h3>
                <p className="projects-list__description">Selling coffee drinks website using Html, Scss, Gulp</p>
                <a className="projects-list__button" href="https://mishamoskalenko.github.io/Drink" target="_blank"
                  rel="noopener noreferrer">View</a>
              </div>
            </li>
            <li className="projects-list__item" data-animate data-stagger>
              <div>
                <Image className="projects-list__image" src="/cat.png" alt="Screenshot of the 'Cat energy' website, a landing page for selling cat food." width={702.5} height={350} />
              </div>
              <div className="projects-list__text">
                <h3 className="projects-list__title">Cat energy</h3>
                <p className="projects-list__description">Selling cat food website using Html, Scss, Gulp</p>
                <a className="projects-list__button" href="https://mishamoskalenko.github.io/cat-energy" target="_blank"
                  rel="noopener noreferrer">View</a>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
