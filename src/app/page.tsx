import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='h-24'></div> {/* Spacer between hero sections */}
      <Hero2 />
    </main>
  );
}
