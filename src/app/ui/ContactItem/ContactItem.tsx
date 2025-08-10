"use client";
import Image from "next/image";
import styles from './ContactItem.module.scss'
import { motion } from "framer-motion";

interface ContactItemProps {
    text: string;
    href?: string;
    image: string;
    delay?: number;
}

export const ContactItem = (props: ContactItemProps) => {
    const { text, image, href, delay = 0 } = props;

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    const content = (
        <motion.li
            className={styles.info_item}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -5% 0px" }}
            whileHover={{ y: -4, transition: { duration: 0.1 } }}
            transition={{ duration: 0.3, delay }}
            style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
        >
            <Image className={styles.image} src={image} alt="" width={40} height={40} />
            <p className={styles.info_text}>
                {text}
            </p>
        </motion.li>
    )

    if (href) {
        return (
            <a className={styles.info_link} href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }
    else {
        return content
    }
};
