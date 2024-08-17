import styles from "./styles/podcast.module.css";

export const Podcast = () => {
    return (
        <section className={styles.section}>
            <div className={styles.podcast}>
                <div className={styles.podcast_bg} />
                <div className={styles.host}>
                    <img src="/host.png" className={styles.host_img} />
                    <span>Akintoye Olamide</span>
                    <span className={styles.host_span}>Host</span>
                </div>

                <div className={styles.podcast_cont}>
                    <span>The Podcast: Acquiring Luxury Properties</span>
                    <span>Welcome to the KEYS Marketplace Podcast, where we explore the world of high-end real estate, unveiling the latest trends, insights, and stories behind some of the most exquisite homes on the market. Whether you're an avid real estate enthusiast, a potential buyer, or simply someone who appreciates the finer things in life, this podcast is your gateway to understanding the luxury property landscape.</span>
                    <button>
                        Listen Now
                    </button>
                </div>
            </div>

            <div className={styles.dash} />

            <div className={styles.networks}>
                <span>As seen in</span>
                <div className={styles.networks_img_cont}>
                    <img src="/n1.png" style={{ width: '100px', height: '20px' }} />
                    <img src="/n2.png" style={{ width: '100px', height: '20px' }} />
                    <img src="/n3.png" style={{ width: '100px', height: '20px' }} />
                    <img src="/n4.png" style={{ width: '100px', height: '20px' }} />
                    <img src="/n5.png" style={{ width: '100px', height: '20px' }} />
                </div>
            </div>

            <div className={styles.comments}>
                <p className={styles.comments_text}>“The idea of buying properties fascinates me and KEYS Marketplace makes it very easy to explore various properties and buy”</p>
                <span className={styles.commenter}>John, United Kingdom</span>
                <div className={styles.count_cont}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg>
                    <span className={styles.count}>1 of 20</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                </div>
            </div>
        </section>
    )
}