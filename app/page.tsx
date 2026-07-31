import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Steam from "@/components/Steam";
import Programs from "@/components/Programs";
import Approach from "@/components/Approach";
import Involve from "@/components/Involve";
import Closer from "@/components/Closer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Steam />
        <Programs />
        <Approach />
        <Involve />
        <Closer />
      </main>
      <Footer />
    </>
  );
}
