import Image from "next/image";

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
        <li className="projects-list__item" data-animate data-stagger>
            <div>
                <Image className="projects-list__image" src={image} alt={alt} width={702.5} height={350} />
            </div>
            <div className="projects-list__text">
                <h3 className="projects-list__title">{title}</h3>
                <p className="projects-list__description">{description}</p>
                <a className="projects-list__button" href={href} target="_blank" rel="noopener noreferrer">View</a>
            </div>
        </li>
    );
};
