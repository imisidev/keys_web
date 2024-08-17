"use client"

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { ArrowRight } from "lucide-react"
import styles from "./styles/advert.module.css";
import a1 from "../../public/a1.jpg";
import a2 from "../../public/a2.jpg";
import a3 from "../../public/a3.jpg";
import a4 from "../../public/a4.jpg";
import * as Progress from '@radix-ui/react-progress';

interface ProgressProps {
    progress: number;
}

export const Advert = () => {
    const images = [a1, a2, a3, a4];
    const [currentIndex, setCurrentIndex] = useState(0);
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

        return () => {
            clearInterval(progressInterval);
            clearTimeout(imageTimeout);
        };
    }, [currentIndex, images.length]);

    const textItems = [
        'Sell Jets on Keylead',
        'Sell Real Estate on Keylead',
        'Sell Cars on Keylead',
        'Sell Ships on Keylead'
    ];

    const advertItems = [
        'Real Estate', 'Cars', 'Yatchs', 'Jets',
    ]

    return (
        <div className={styles.body}>
            <div className={styles.slide_bg} />

            <div className={styles.advertTabs}>
                {
                    advertItems.map((_, i) => {
                        return (
                            <button
                                className={styles.tab}
                                key={i}
                                style={{
                                    background: currentIndex === i ? "white" : "transparent",
                                    color: currentIndex === i ? "black" : "white"
                                }}
                            >
                                {_}
                            </button>
                        )
                    })
                }
            </div>

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
                <button className={styles.btn}>
                    START NOW <ArrowRight color="black" style={{ marginLeft: '10px' }} />
                </button>

                <div className={styles.hero}>
                    <div style={{ position: 'relative' }}>
                        {textItems.map((text, index) => (
                            <span
                                key={index}
                                className={styles.intro}
                                style={{
                                    opacity: index === currentIndex ? 1 : 0,
                                    transition: 'opacity 0.5s ease-in-out',
                                    position: index === currentIndex ? 'relative' : 'absolute',
                                }}
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                    <span className={styles.intro2}>Attract quality leads within the highest concentration of international luxury buyers</span>
                </div>
            </div>
        </div>
    );
}
