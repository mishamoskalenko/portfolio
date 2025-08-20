"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ProjectItem.module.scss"

interface ProjectItemProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    href: string;
    gitHubHref?: string;
}

export const ProjectItem = (props: ProjectItemProps) => {
    const { title, description, image, href, alt, gitHubHref } = props;
    return (
        <motion.li
            className={styles.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -5% 0px" }}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
        >
            <div>
                <Image className={styles.image} src={image} alt={alt} width={702.5} height={350} />
            </div>
            <div className={styles.text}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.group}>
                    <a
                        className={styles.button}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                    {gitHubHref &&
                        <a
                            className={`${styles.button} ${styles.button_github}`}
                            href={gitHubHref}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    }
                </div>
            </div>
        </motion.li>
    );
};
