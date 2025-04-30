import Image from "next/image";
import HeroSection from "./Sections/HeroSection";
import EraOfRenSection from "./Sections/EraOfRenSection";
import ExploreRenSection from "./Sections/ExploreRenSection";
export default function Home() {
  return (
   <main className="mt-20">
   <HeroSection />
   <EraOfRenSection />
   <ExploreRenSection />
   </main>
  );
}
