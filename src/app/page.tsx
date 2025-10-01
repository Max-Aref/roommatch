import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import HowItWorks from "@/components/HowItWorksSimple";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='h-24'></div> {/* Spacer between hero sections */}
      <Hero2 />
      <div className='h-24'></div> {/* Spacer between hero sections */}
      <Hero3 />
      <HowItWorks />
    </main>
  );
}
