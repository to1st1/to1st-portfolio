import Hero from "@/components/dom/Hero";
import Timeline from "@/components/dom/Timeline";

export default function Home() {
  return (
    <main className="w-full relative z-10 text-foreground selection:bg-accent selection:text-black">
      <Hero />
      <Timeline />
      
      {/* Additional sections would go here (Philosophy, Projects) */}
      <section className="min-h-screen flex items-center justify-center">
         <div className="text-center">
            <h2 className="text-4xl font-medium opacity-50 mb-4">More Architectures Coming Soon</h2>
            <p className="text-zinc-500 max-w-md mx-auto">This premium WebGL foundation is currently scaling.</p>
         </div>
      </section>
    </main>
  );
}
