import {
  LandingHeader,
  LandingCarousel,
  LandingCategory,
  LandingAdvert,
  LandingTrending,
  LandingJournal,
  LandingPodcast,
  LandingUpdates,
  LandingLinks,
  LandingFooter,
} from "../../components";
import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <LandingHeader />
      <LandingCarousel />
      <LandingCategory />
      <LandingAdvert />
      <LandingTrending />
      <LandingJournal />
      <LandingPodcast />
      <LandingUpdates />
      <LandingLinks />
      <LandingFooter />
    </main>
  );
}
