export interface HeaderProps {
    smallTitle?: string;
    bigTitle: string;
    text?: string;
    alignment?: "left" | "right";
}

export type ModifierObj = Record<
    Exclude<HeaderProps["alignment"], undefined>,
    string
>;
