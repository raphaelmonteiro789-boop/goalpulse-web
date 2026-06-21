import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveMatches from "./components/LiveMatches";
import SecaoNoticias from "./components/SecaoNoticias";
import Copa2026 from "./components/Copa2026";
import GoalPulseTV from "./components/GoalPulseTV";
import PulseAI from "./components/PulseAI";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <Hero />
      <LiveMatches />
      <SecaoNoticias />
      <Copa2026 />
      <GoalPulseTV />
      <PulseAI />
      <Footer />
    </main>
  );
}
