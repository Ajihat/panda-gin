import { InnerContainerProps } from "./InnerContainer.types";

import "./InnerContainer.sass";

export const InnerContainer = ({ children }: InnerContainerProps) => {
    return <div className="innercontainer">{children}</div>;
};
