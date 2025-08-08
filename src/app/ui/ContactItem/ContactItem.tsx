import Image from "next/image";
import styles from './ContactItem.module.scss'

interface ContactItemProps {
    text: string;
    href?: string;
    image: string;
}

export const ContactItem = (props: ContactItemProps) => {
    const { text, image, href } = props;

    const content = (
        <li className={styles.info_item} data-animate data-stagger>
            <Image src={image} alt="" width={40} height={40} />
            <p className={styles.info_text}>
                {text}
            </p>
        </li>
    )

    if (href) {
        return (
            <a data-animate data-stagger className={styles.info_link} href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }
    else {
        return content
    }
};
