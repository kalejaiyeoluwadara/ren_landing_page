import Image from "next/image";
import HeroSection from "./Sections/HeroSection";
import EraOfRenSection from "./Sections/EraOfRenSection";
import ExploreRenSection from "./Sections/ExploreRenSection";
import FeaturesSection from "./Sections/FeaturesSection";
import ShareReviewsSection from "./Sections/ShareReviewsSection";
import PricingSection from "./Sections/PricingSection";
import MarketSection from "./Sections/MarketSection";
export default function Home() {
  return (
   <main className="mt-20">
   <HeroSection />
   <EraOfRenSection />
   <ExploreRenSection />
   <FeaturesSection />
   <ShareReviewsSection/>
   <PricingSection/>
   <MarketSection/>
   </main>
  );
}
