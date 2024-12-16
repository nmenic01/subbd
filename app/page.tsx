import Hero from "./components/hero";
import SocialSection from "./components/follow-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background" data-testid="home-page">
      <Hero />
      <SocialSection />
    </main>
  );
}
