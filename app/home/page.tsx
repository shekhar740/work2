import {Hero} from "./_components/Hero";
import { WhyChooseUs } from "./_components/WhyChooseUs";



const Home = () => {
  return <section className=" w-full h-full">
    <div className="flex flex-col gap-10">
    <Hero />
    <WhyChooseUs />
    </div>
  </section>;
};


export default Home;
