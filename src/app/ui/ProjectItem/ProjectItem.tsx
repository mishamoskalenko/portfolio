"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectItemProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    href: string;
}

export const ProjectItem = (props: ProjectItemProps) => {
    const { title, description, image, href, alt } = props;
    return (
        <motion.li
            className="projects-list__item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -5% 0px" }}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
        >
            <div>
                <Image className="projects-list__image" src={image} alt={alt} width={702.5} height={350} />
            </div>
            <div className="projects-list__text">
                <h3 className="projects-list__title">{title}</h3>
                <p className="projects-list__description">{description}</p>
                <a
                    className="projects-list__button"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View
                </a>
            </div>
        </motion.li>
    );
};
