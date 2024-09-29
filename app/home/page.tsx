import { Button } from "@/components/ui/button";
import { Cusomter } from "./_components/Customer";
import { Features } from "./_components/Features";
import { Hero } from "./_components/Hero";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { Price } from "./_components/Price";
import { Footer } from "./_components/Footer";

const Home = () => {
  return (
    <section className=" w-full h-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <WhyChooseUs />
        <Features />
        <Cusomter />
        <Price />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
