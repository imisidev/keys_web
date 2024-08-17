"use client"

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styles from "./styles/carousel.module.css";
import rs1 from "../../public/rs1.jpg";
import rs2 from "../../public/rs2.jpg";
import rs3 from "../../public/rs3.jpg";
import rs4 from "../../public/rs4.jpg";
import rs5 from "../../public/rs5.jpg";
import * as Progress from '@radix-ui/react-progress';

interface ProgressProps {
    progress: number;
}

const Loader = ({ progress }: ProgressProps) => {
    return (
        <Progress.Root className={styles.ProgressRoot} value={progress}>
            <Progress.Indicator
                className={styles.ProgressIndicator}
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export const Carousel = () => {
    const images = [rs1, rs2, rs3, rs4, rs5];
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [progress, setProgress] = useState(0);
    const [progress, setProgress] = useState<number[]>(new Array(images.length).fill(0));

    useEffect(() => {
        // Reset all progress values to 0 for the new current image
        const newProgress = new Array(images.length).fill(0);
        setProgress(newProgress);

        // Load the current image's progress
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = [...prevProgress];
                if (newProgress[currentIndex] < 100) {
                    newProgress[currentIndex] += 20; // Increment by 20%
                }
                return newProgress;
            });
        }, 300); // Update every 300ms

        // Move to the next image after 3 seconds
        const imageTimeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Transition after 3 seconds

        // Clean up on unmount
        return () => {
            clearInterval(progressInterval);
            clearTimeout(imageTimeout);
        };
    }, [currentIndex, images.length]);

    // useEffect(() => {
    //     // Reset progress for new image
    //     setProgress(0);

    //     // Timer to update the progress
    //     const progressInterval = setInterval(() => {
    //         setProgress((prev) => {
    //             if (prev < 100) return prev + 20; // Increment by 20% every 300ms
    //             clearInterval(progressInterval);
    //             return 100;
    //         });
    //     }, 300); // Update every 300ms

    //     // Move to the next image after 3 seconds
    //     const imageInterval = setTimeout(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 3000); // Transition after 3 seconds

    //     // Clear intervals on unmount
    //     return () => {
    //         clearInterval(progressInterval);
    //         clearTimeout(imageInterval);
    //     };
    // }, [currentIndex, images.length]);

    return (
        <div className={styles.body}>
            <div className={styles.slide_bg} />
            <div className={styles.carousel}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.slide}
                        style={{
                            opacity: index === currentIndex ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    >
                        <Image
                            src={image}
                            alt={`carousel_img_${index + 1}`}
                            className={styles.image}
                            fill
                        />
                    </div>
                ))}
                <div className={styles.ProgressRootCont}>
                    {
                        progress.map((_, i) => {
                            return (
                                <Loader progress={_} key={i} />
                            )
                        })
                    }
                </div>
                <div className={styles.hero}>
                    <span className={styles.intro}>The World Best Marketplace</span>
                    <div className={styles.detail_cont}>
                        <span className={styles.detail}>ONE SEARCH</span>
                        <div className={styles.dot} />
                        <span className={styles.detail}>200,000+ LISITINGS</span>
                        <div className={styles.dot} />
                        <span className={styles.detail}>10,000+ TRUSTED SELLERS</span>
                        <div className={styles.dot} />
                        <span className={styles.detail}>50 COUNTRIES</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
