import { useState, useRef, useEffect } from "react";

import { GalleryProps } from "./Gallery.types";

import "./Gallery.sass";

export const Gallery = ({ images, outOfStock, discount }: GalleryProps) => {
    const [currentlyDisplayedImage, setCurrentlyDisplayedImage] =
        useState<number>(0);
    const bigGalleryRef = useRef<HTMLDivElement | null>(null);

    const scrollGallery = (index: number) => {
        const selectedImg = bigGalleryRef.current?.children[
            index
        ] as HTMLImageElement;
        const bigGalleryOffsetLeft = bigGalleryRef.current
            ?.offsetLeft as number;
        const selectedImgOffestLeft = selectedImg?.offsetLeft;
        const distance = selectedImgOffestLeft - bigGalleryOffsetLeft;
        bigGalleryRef.current?.scrollTo(distance, 0);
    };

    useEffect(() => {
        scrollGallery(currentlyDisplayedImage);
    }, [currentlyDisplayedImage]);

    return (
        <section className="gallery">
            <div className="gallery__big" ref={bigGalleryRef}>
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image}
                            alt="product-pic"
                            className="gallery__image"
                        />
                    );
                })}
            </div>
            <div className="gallery__listing">
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image}
                            onClick={() => setCurrentlyDisplayedImage(index)}
                            alt="listing-pic"
                            className={`gallery__image-listing ${
                                index === currentlyDisplayedImage
                                    ? "gallery__image-listing--active"
                                    : ""
                            }`}
                        />
                    );
                })}
            </div>
            {outOfStock && (
                <p className="gallery__out-of-stock">Out of stock</p>
            )}
            {discount && (
                <p className="gallery__out-of-stock">{`${discount}% off`}</p>
            )}
        </section>
    );
};
