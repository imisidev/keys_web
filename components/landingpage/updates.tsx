import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react"
import styles from "./styles/updates.module.css";
import f1 from "../../public/f1.jpg";
import f2 from "../../public/f2.jpg";
import f3 from "../../public/f3.jpg";
import f4 from "../../public/f4.jpg";

const data = [
    {
        img: f1,
        listing: 'Real Estate',
        feature: '100,00 Listings',
    },
    {
        img: f2,
        listing: 'Cars',
        feature: '20,000 Listings',
    },
    {
        img: f3,
        listing: 'Yatchs',
        feature: '35,000 Listings',
    },
    {
        img: f4,
        listing: 'Jets',
        feature: '32,000 Listings',
    },
]

export const Updates = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.header_div}>
                    <span className={styles.title}>Stay in the Know</span>
                    <span className={styles.ig}>Join 150+ followers on instagram</span>
                </div>
                <button>Follow</button>
            </div>

            <div className={styles.feature_cont}>
                {
                    data.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.feature}
                            >
                                <Image
                                    fill
                                    src={feature.img}
                                    alt={`feature-img-${feature}`}
                                    className={styles.feature_img}
                                />
                                <div className={styles.feature_detail}>
                                    <div className={styles.cols}>
                                        <span className={styles.feature_name}>{feature.listing}</span>
                                        <span className={styles.feature_listing}>{feature.feature}</span>
                                    </div>

                                    <ArrowRight color="black" />
                                </div>
                                <div className={styles.feature_bg} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}