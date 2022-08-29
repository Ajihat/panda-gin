import "./SubmenuLink.sass";

interface SubmenuLinkProps {
    title: string;
    href: string;
    activeCategory: string;
}

export const SubmenuLink = ({
    title,
    href,
    activeCategory,
}: SubmenuLinkProps) => {
    return (
        <li
            className={
                href === activeCategory
                    ? "submenulink submenulink--active"
                    : "submenulink"
            }
        >
            <a href={`#${href}`} className="submenulink__link">
                {title}
            </a>
        </li>
    );
};
