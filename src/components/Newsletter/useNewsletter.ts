import { useState } from "react";

export const useNewsletter = () => {
    const [apiMessage, setApiMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onMutate = () => {
        setApiMessage("");
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setApiMessage("Subscribed to newsletter!");
            setTimeout(() => {}, 1500);
        }, 1500);
    };

    return { apiMessage, isLoading, onMutate };
};
