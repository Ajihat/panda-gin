import "./InnerContainer.sass";

interface InnerContainerProps {
    children: React.ReactNode;
}

export const InnerContainer = ({ children }: InnerContainerProps) => {
    return <div className="innercontainer">{children}</div>;
};
