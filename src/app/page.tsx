import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import MissionPillars from "@/components/MissionPillars";
import Programs from "@/components/Programs";
import Leadership from "@/components/Leadership";
import KidsCodeGift from "@/components/KidsCodeGift";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <MissionPillars />
      <Programs />
      <Leadership />
      <KidsCodeGift />
      <Testimonials />
      <Events />
      <Admissions />
      <Footer />
    </main>
  );
}
