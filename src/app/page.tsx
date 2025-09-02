"use client";
import Image from "next/image";
import { ProjectItem } from "./ui/ProjectItem/ProjectItem";
import { ContactItem } from "./ui/ContactItem/ContactItem";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  const skills = [
    "HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "React", "Next.js", "Git", "React Router", "Axios", "Redux Toolkit", "i18n", "Webpack", "Vite", "Babel", "Jest", "RTL", "Cypress", "Loki", "Storybook", "GitHub", "Stylelint", "GitHub Actions", "ESLint", "Framer Motion", "English (B2)"
  ]

  return (
    <div className="page__body container">
      <header className="page__header header">
        <div className="header__catalog catalog">
          <motion.div className="catalog__image" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Image src="/avatar.png" alt="Portrait of Mykhailo Moskalenko, Frontend Developer" width={750} height={750} priority />
          </motion.div>
          <motion.div className="catalog__description description" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="description__container">
              <h2 className="description__title">Frontend Developer</h2>
              <ReactTyped className="description__subtitle" typeSpeed={60} strings={["simple, stylish, and logical",]} />
            </div>
          </motion.div>
          <motion.div className="catalog__portfolio portfolio" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="portfolio__container">
              <p className="portfolio__title">Resume</p>
              <a className="portfolio__link" href="Mykhailo_Moskalenko_CV.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </div>
          </motion.div>
        </div>
      </header>
      <main className="page__main info container">
        <motion.h1 className="info__title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15, margin: "0px 0px -5% 0px" }} transition={{ duration: 0.3 }} style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}>Mykhailo Moskalenko</motion.h1>
        <ul className="info__list">
          <ContactItem text={"Rouen, France"} image={"/location.svg"} delay={0} />
          <ContactItem text={"+33 7 80 45 07 93"} image={"/phone.svg"} href="tel:+33780450793" delay={0.06} />
          <ContactItem text={"GitHub"} image={"/github.svg"} href="https://github.com/mishamoskalenko" delay={0.12} />
          <ContactItem text={"LinkedIn"} image={"/linkedin.svg"} href="https://www.linkedin.com/in/mykhailo-moskalenko" delay={0.18} />
          <ContactItem text={"misamoskalenko318@gmail.com"} image={"/mail.svg"} href="mailto:misamoskalenko318@gmail.com" delay={0.24} />
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
          <motion.div className="stats__skills skills" initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ willChange: "transform, opacity" }}>
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
        <section className="projects">
          <h2 className="projects__title">My projects</h2>
          <ul className="projects__list">
            <ProjectItem
              title={"French Cards Generator"}
              description={"AI flashcard generator web app. Built with Next.js, TypeScript, Redux Toolkit and i18next."}
              image={"/projects/french.png"}
              alt={"French Cards Generator — learned words screenshot"}
              href={'https://frenchcardsgenerator.vercel.app'}
              gitHubHref={"https://github.com/mishamoskalenko/french-cards-generator"}
            />
            <ProjectItem
              title={"Motion Designer Portfolio"}
              description={"Portfolio website for a motion designer. Built with Next.js, TypeScript, i18next, and Framer Motion."}
              image={"/projects/motion.png"}
              alt={"Motion Designer portfolio — homepage screenshot"}
              href={'https://motion-designer.vercel.app'}
            />
            <ProjectItem
              title={"Blogging Platform"}
              description={"Blogging platform. Built with React, TypeScript, Redux Toolkit (RTK Query), React Router, SCSS Modules, i18next, and Headless UI. Tested with Jest, React Testing Library, and Cypress."}
              image={"/projects/blogging-platform.png"}
              alt={"Blogging platform — homepage screenshot"}
              href={'https://mishablogging-platform.netlify.app'}
              gitHubHref={"https://github.com/mishamoskalenko/blogging-platform"}
            />
            <ProjectItem
              title={"Calendar"}
              description={"Calendar app. Built with React, TypeScript, Redux Toolkit, React Router, Axios, and Ant Design."}
              image={"/projects/calendar.png"}
              alt={"Calendar app — month grid with events"}
              href={'https://mishamoskalenko.github.io/calendar'}
              gitHubHref={"https://github.com/mishamoskalenko/calendar"}
            />
            <ProjectItem
              title={"Cryptopin"}
              description={"Cryptocurrency tracker with live token data. Built with React, React Router, and Axios."}
              image={"/projects/cryptopin.png"}
              alt={"Cryptocurrency tracker — tokens and prices"}
              href={'https://mishamoskalenko.github.io/cryptopin'}
              gitHubHref={"https://github.com/mishamoskalenko/cryptopin"}
            />
            <ProjectItem
              title={"Weather app"}
              description={"Weather app built with React and Axios."}
              image={"/projects/weather.png"}
              alt={"Weather app — city forecast screen"}
              href={'https://mishamoskalenko.github.io/weather-app'}
              gitHubHref={"https://github.com/mishamoskalenko/weather-app"}
            />
            <ProjectItem
              title={"Drink"}
              description={"Coffee drinks landing page. Built with HTML, SCSS, and Gulp."}
              image={"/projects/drink.png"}
              alt={"Coffee drinks landing page — hero section"}
              href={'https://mishamoskalenko.github.io/Drink'}
              gitHubHref={"https://github.com/mishamoskalenko/Drink"}
            />
            <ProjectItem
              title={"Cat Energy"}
              description={"Cat food landing page. Built with HTML, SCSS, and Gulp."}
              image={"/projects/cat.png"}
              alt={"Cat Energy landing page — hero section"}
              href={'https://mishamoskalenko.github.io/cat-energy'}
              gitHubHref={"https://github.com/mishamoskalenko/cat-energy"}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
