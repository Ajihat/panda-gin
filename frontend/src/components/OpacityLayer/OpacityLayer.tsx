import { OpacityLayerProps } from "./OpacityLayer.types";

import "./OpacityLayer.sass";

export const OpacityLayer = ({ zIndex }: OpacityLayerProps) => {
    return (
        <div
            className="opacitylayer"
            style={{
                zIndex: zIndex,
            }}
        ></div>
    );
};
