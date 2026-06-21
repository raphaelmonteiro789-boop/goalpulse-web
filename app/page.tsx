import Header from "./components/Header";
import Hero from "./components/Hero";
import LiveMatches from "./components/LiveMatches";
import SecaoNoticias from "./components/SecaoNoticias";
import GoalPulseTV from "./components/GoalPulseTV";
import PulseAI from "./components/PulseAI";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Header />
      <Hero />
      <LiveMatches />
      <SecaoNoticias />
      <GoalPulseTV />
      <PulseAI />
      <Footer />
    </main>
  );
}
