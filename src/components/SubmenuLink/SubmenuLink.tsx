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
        <li className="submenulink">
            <a href={`#${href}`} className="submenulink__link">
                {title}
            </a>
            {activeCategory === href && (
                <div className="submenulink__border-top"></div>
            )}
            {activeCategory === href && (
                <div className="submenulink__border-bottom"></div>
            )}
        </li>
    );
};
