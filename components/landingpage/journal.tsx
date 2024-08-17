import React from "react";
import styles from "./styles/journal.module.css";
import Image from "next/image";
import { Heart } from "lucide-react";
import j1 from "../../public/j1.png";
import j2 from "../../public/j2.png";
import j3 from "../../public/j3.png";

const journals = [
    {
        img: j1,
        time: '1 August, 2024',
        title: 'Bugatti Sales in Dubai: Unveiling the Luxury Market Trends',
        desc: 'As Dubai continues to thrive as a center of wealth and innovation, the future looks promising for Bugatti...',
    },
    {
        img: j2,
        time: '1 August, 2024',
        title: 'Bugatti Sales in Dubai: Unveiling the Luxury Market Trends',
        desc: 'As Dubai continues to thrive as a center of wealth and innovation, the future looks promising for Bugatti...',
    },
    {
        img: j3,
        time: '1 August, 2024',
        title: 'Bugatti Sales in Dubai: Unveiling the Luxury Market Trends',
        desc: 'As Dubai continues to thrive as a center of wealth and innovation, the future looks promising for Bugatti...',
    },
];

export const Journal = () => {
    return (
        <section className={styles.body}>
            <span className={styles.title}>The Journal</span>

            <div className={styles.content}>
                <div className={styles.headliner}>
                    <span >1 August, 2024</span>
                    <span>
                        Bugatti Sales in Dubai: Unveiling the Luxury Market Trends
                    </span>
                    <span>As Dubai continues to thrive as a center of wealth and innovation, the future looks promising for Bugatti...</span>
                </div>

                <div className={styles.journals_cont}>
                    {
                        journals.map((_, i) => {
                            return (
                                <div
                                    key={i}
                                    className={styles.journal}
                                    style={{ marginBottom: i !== 2 ? '20px' : 0 }}
                                >
                                    <div className={styles.journal_img_cont}>
                                        <Image
                                            src={_.img}
                                            alt="journal_img"
                                            fill
                                            className={styles.journal_img}
                                        />
                                    </div>

                                    <div className={styles.journal_texts}>
                                        <span>{_.time}</span>
                                        <span>{_.title}</span>
                                        <span>{_.desc}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}