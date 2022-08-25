import { useEffect } from "react";

import { Header } from "../components/Header/Header";

import "./Pages.sass";

export const Shop = () => {
    useEffect(() => {
        document.title = "Shop | Panda Gin";
    }, []);

    return (
        <div className="shop">
            <Header smallTitle="Shop Panda Gin" bigTitle="Find your Panda" />
        </div>
    );
};
