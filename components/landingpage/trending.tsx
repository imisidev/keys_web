import React from "react";
import styles from "./styles/trending.module.css";
import Image from "next/image";
import { Heart } from "lucide-react";
import t1 from "../../public/t1.png";
import t2 from "../../public/t2.jpg";
import t3 from "../../public/t3.jpg";
import t4 from "../../public/t4.jpg";

const data = [
    {
        listing: 'Classic Hublot Watch',
        price: 'Price On Request',
        img: t1,
    },
    {
        listing: 'Ferrari S50-90 SPIDER',
        price: '$2,200,000',
        img: t2,
    },
    {
        listing: 'House in Seengen, Aargau, Switzerland',
        price: 'Price On Request',
        img: t3,
    },
    {
        listing: 'Coastal Cruising Yatch',
        price: 'Price On Request',
        img: t4,
    },
]

export const Trending = () => {
    return (
        <section className={styles.body}>
            <span className={styles.title}>Trending Products</span>

            <div className={styles.content}>
                {
                    data.map((_, i) => {
                        return (
                            <button
                                key={i}
                                className={styles.product}
                            >
                                <div className={styles.like}>
                                    <Heart />
                                </div>

                                <Image
                                    alt="product-img"
                                    src={_.img}
                                    fill
                                />

                                <div className={styles.info}>
                                    <span className={styles.listing}>{_.listing}</span>
                                    <span className={styles.price}>{_.price}</span>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </section>
    )
}