"use client";
import Image from "next/image";
import { ProjectItem } from "./ui/ProjectItem/ProjectItem";
import { ContactItem } from "./ui/ContactItem/ContactItem";
import { motion } from "framer-motion";

export default function Home() {
  const skills = [
    "HTML", "CSS", "SCSS", "JavaScript", "Typescript", "React", "React Router", "Redux Toolkit", "GIT", "Axios", "Webpack", "Vite", "i18n", "Babel", "Jest", "RTL", "Cypress", "Loki", "Storybook", "GitHub", "GitHub Actions", "ESLint", "Stylelint", "English(B2)"
  ]

  return (
    <div className="page__body container">
      <header className="page__header header">
        <div className="header__catalog catalog">
          <motion.div className="catalog__image" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Image src="/avatar-1.png" alt="Mykhailo Moskalenko's avatar" width={750} height={750} priority />
          </motion.div>
          <motion.div className="catalog__description description" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="description__container">
              <h2 className="description__title">Frontend Developer</h2>
              <p className="description__subtitle">simple, stylish and logical</p>
            </div>
          </motion.div>
          <motion.div className="catalog__portfolio portfolio" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="portfolio__container">
              <p className="portfolio__title">Resume</p>
              <a className="portfolio__link" href="Mykhailo_Moskalenko_CV.pdf" target="_blank"
                rel="noopener noreferrer">View Resume</a>
            </div>
          </motion.div>
        </div>
      </header>
      <main className="page__main info container">
        <motion.h1 className="info__title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15, margin: "0px 0px -5% 0px" }} transition={{ duration: 0.3 }} style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}>Mykhailo Moskalenko</motion.h1>
        <ul className="info__list">
          <ContactItem text={"Rouen, France"} image={"/location.svg"} delay={0} />
          <ContactItem text={"+33 7 80 45 07 93"} image={"/phone.svg"} delay={0.06} />
          <ContactItem text={"GitHub"} image={"/github.svg"} href="https://github.com/mishamoskalenko" delay={0.12} />
          <ContactItem text={"LinkedIn"} image={"/linkedin.svg"} href="https://www.linkedin.com/in/mykhailo-moskalenko" delay={0.18} />
          <ContactItem text={"misamoskalenko318@gmail.com"} image={"/mail.svg"} delay={0.24} />
        </ul>
        <section className="page__section stats">
          <motion.div className="stats__profile profile" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="profile__title">Profile</h2>
            <p className="profile__description">
              I am a frontend developer and recent graduate software engineering student with experience in building React web applications, solving algorithmic challenges, and working in collaborative development teams.
              <br></br>
              In each project, I focused on clean architecture, efficient state management, and user-friendly interfaces. I also enjoy competitive programming and was a top participant in the Algorithms Olympiad.
              <br></br>
              I am actively seeking an internship or junior frontend developer roles to contribute to projects and further expand my expertise in web development.
            </p>
          </motion.div>
          <motion.div className="stats__skills skills" initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ willChange: "transform, opacity"}}>
            <h2 className="skills__title">Skills</h2>
            <ul className="skills__list skills-list">
              {skills.map((item, index) => (
                <motion.li
                  className="skills-list__item"
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  style={{ willChange: "transform, opacity" }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>
        <section className="page__section projects">
          <h2 className="projects__title">My projects</h2>
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
