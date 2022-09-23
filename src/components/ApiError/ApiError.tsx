import { ApiErrorProps } from "./ApiError.types";

import "./ApiError.sass";

export const ApiError = ({ text }: ApiErrorProps) => {
    return <p className="apierror">{`Error: ${text}`}</p>;
};
