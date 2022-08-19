import "./InnerContainer.sass";

interface InnerContainerProps {
    children: React.ReactNode;
}

const InnerContainer = ({ children }: InnerContainerProps) => {
    return <div className="innercontainer">{children}</div>;
};

export default InnerContainer;
