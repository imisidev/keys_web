import styles from "./styles/links.module.css"

const links = [
    {
        title: 'Cities and Regions',
        links: [
            'Private islands for sale', 'Balearic islands homes for sale', 'Costa del Sol homes for sale',
            'French Riviera homes for sale', 'French Riviera homes for sale', 'Amsterdam homes for sale',
            'Atlanta homes for sale', 'Austin homes for sale', 'Austin homes for sale'
        ],
    },
    {
        title: 'Countries',
        links: [
            'Homes for sale in Australia', 'Homes for sale in British Virgin Islands', 'Homes for sale in Canada',
            'Homes for sale in Cayman Islands', 'Homes for sale in France', 'Homes for sale in French Polynesia',
            'Homes for sale in Germany', 'Homes for sale in Greece', 'Homes for sale in India'
        ],
    },
    {
        title: 'Cars',
        links: [
            'Ferrari for sale', 'Aston Martin for sale', 'Koenigsegg for sale',
            'Bugatti for sale', 'Maserati for sale', 'Pagani for sale',
            'Porsche for sale', 'Porsche for sale', 'Lamborghini for sale'
        ],
    },
    {
        title: 'Jets and Helicopters',
        links: [
            'Bombardier for sale', 'Cessna for sale', 'Dassault for sale',
            'Gulfstream for sale', 'Hawker for sale', 'Boeing for sale',
            'Gulfstream G550 for sale', 'Embraer Lineage 1000 for sale', 'Learjet 70 for sale'
        ],
    },
    {
        title: 'Yachts',
        links: [
            'Ferretti for sale', 'Benetti for sale', 'Beneteau for sale',
            'Privilege for sale', 'Sea Ray for sale', 'Azimut for sale',
            'Sunseeker for sale', 'Hatteras for sale',
        ],
    },
    {
        title: 'Watches',
        links: [
            'IWC for sale', 'Patek Philippe for sale', 'Rolex for sale',
            'Audemars Piguet for sale', 'Breguet for sale', 'Bvlgari for sale',
            'Cartier for sale', 'Piaget for sale', 'Richard Mille for sale',
        ],
    },
]

export const Links = () => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>Popular Links</p>
            <div className={styles.links_cont}>
                {
                    links.map((_, i) => {
                        return (
                            <div key={i} className={styles.link_section}>
                                <span className={styles.link_section_title}>{_.title}</span>
                                <div className={styles.link_col}>
                                    {
                                        _?.links?.map((link, index) => {
                                            return (
                                                <span key={index} className={styles.link}>{link}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.dash} />

            <div className={styles.news}>
                <div className={styles.news_left_cont}>
                    <span>Weekly Luxury Newsletter</span>
                    <span>Receive the beautifully curated selection of what’s trending in luxury with inside stories and tips from our experts</span>
                </div>

                <div className={styles.news_right_cont}>
                    <input
                        placeholder="#434242"
                    />
                    <button>Subscribe</button>
                    <span>By sharing your email, you agree to our Terms of Use and Privacy.</span>
                </div>
            </div>
        </section>
    )
}