"use client";
import Image from "next/image";
import { useEffect } from "react";
import { ProjectItem } from "./ui/ProjectItem/ProjectItem";
import { ContactItem } from "./ui/ContactItem/ContactItem";

export default function Home() {
  useEffect(() => {
    const initAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]');

      if (animatedElements.length === 0) {
        return;
      }

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const isStaggered = el.hasAttribute('data-stagger');
            const index = Number((el as HTMLElement).dataset.index || 0);
            const delay = isStaggered ? index * 100 : 0;

            setTimeout(() => {
              el.classList.add('is-animated');
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
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
      initAnimations();
    }
  }, []);

  const skills = [
    "HTML", "CSS", "SCSS", "JavaScript", "Typescript", "React", "React Router", "Redux Toolkit", "GIT", "Axios", "Webpack", "Vite", "i18n", "Babel", "Jest", "RTL", "Cypress", "Loki", "Storybook", "GitHub", "GitHub Actions", "ESLint", "Stylelint", "English(B2)"
  ]

  return (
    <div className="page__body container">
      <header className="page__header header">
        <div className="header__catalog catalog">
          <div className="catalog__image" data-animate>
            <Image src="/avatar-1.png" alt="Mykhailo Moskalenko's avatar" width={750} height={750} priority />
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
              <a className="portfolio__link" href="Mykhailo_Moskalenko_CV.pdf" target="_blank"
                rel="noopener noreferrer">View Resume</a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main info container">
        <h1 className="info__title">Mykhailo Moskalenko</h1>
        <ul className="info__list">
          <ContactItem text={"Rouen, France"} image={"/location.svg"} />
          <ContactItem text={"+33 7 80 45 07 93"} image={"/phone.svg"} />
          <ContactItem text={"GitHub"} image={"/github.svg"} href="https://github.com/mishamoskalenko" />
          <ContactItem text={"LinkedIn"} image={"/linkedin.svg"} href="https://www.linkedin.com/in/mykhailo-moskalenko" />
          <ContactItem text={"misamoskalenko318@gmail.com"} image={"/mail.svg"} />
        </ul>
        <section className="page__section stats">
          <div className="stats__profile profile" data-animate>
            <h2 className="profile__title">Profile</h2>
            <p className="profile__description">
              I am a frontend developer and recent graduate software engineering student with experience in building React web applications, solving algorithmic challenges, and working in collaborative development teams.
              <br></br>
              In each project, I focused on clean architecture, efficient state management, and user-friendly interfaces. I also enjoy competitive programming and was a top participant in the Algorithms Olympiad.
              <br></br>
              I am actively seeking an internship or junior frontend developer roles to contribute to projects and further expand my expertise in web development.
            </p>
          </div>
          <div className="stats__skills skills" data-animate>
            <h2 className="skills__title">Skills</h2>
            <ul className="skills__list skills-list">
              {skills.map((item, index) => (
                <li className="skills-list__item" key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="page__section projects">
          <h2 className="projects__title" data-animate>My projects</h2>
          <ul className="projects__list projects-list">
            <ProjectItem
              title={"Blogging platform"}
              description={"Blogging platform web application using React, TypeScript, Redux Toolkit(RTK Query), React Router, Axios, SCSS Modules, i18next, Headless UI, Webpack, Vite, Storybook, Jest, React Testing Library & Cypress"}
              image={"/blogging-platform.png"}
              alt={"Screenshot of the main page of the 'Blogging platform' web application."}
              href={'https://mishablogging-platform.netlify.app'}
            />
            <ProjectItem
              title={"Calendar"}
              description={"Calendar web application using React, Typescript, Redux Toolkit, React Router, Axios, Ant design"}
              image={"/calendar.png"}
              alt={"Screenshot of the 'Calendar' web application, showing a grid of events."}
              href={'https://mishamoskalenko.github.io/calendar'}
            />
            <ProjectItem
              title={"Cryptopin"}
              description={"Cryptocurrency website with token tracker using React, React Router, Axios"}
              image={"/cryptopin.png"}
              alt={"Screenshot of the 'Cryptopin' website, displaying a list of cryptocurrencies with their prices."}
              href={'https://mishamoskalenko.github.io/cryptopin'}
            />
            <ProjectItem
              title={"Weather app"}
              description={"Find out the weather app using React, Axios"}
              image={"/weather.png"}
              alt={"Screenshot of the 'Weather app', showing the weather forecast for a specific city."}
              href={'https://mishamoskalenko.github.io/weather-app'}
            />
            <ProjectItem
              title={"Drink"}
              description={"Selling coffee drinks website using HTML, SCSS, Gulp"}
              image={"/drink.png"}
              alt={"Screenshot of the 'Drink' website, a landing page for selling coffee drinks."}
              href={'https://mishamoskalenko.github.io/Drink'}
            />
            <ProjectItem
              title={"Cat energy"}
              description={"Selling cat food website using HTML, SCSS, Gulp"}
              image={"/cat.png"}
              alt={"Screenshot of the 'Cat energy' website, a landing page for selling cat food."}
              href={'https://mishamoskalenko.github.io/cat-energy'}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
