import Advantage from "@/components/main/home/advantage";
import Hero from "@/components/main/home/hero";
import HowItWorks from "@/components/main/home/how-it-works";
import StartTrading from "@/components/main/home/start-trading";
import ellipse from '@/assets/icons/home-ellipse.svg'

const Home = () => {
  return <div>
    <Hero />
    <Advantage/>
    <HowItWorks/>
    <div className="relative overflow-hidden">
      <StartTrading/>
      <img src={ellipse} alt="ellipse" className='absolute bottom-[-5%] z-[2]' />
    </div>
  </div>;
};

export default Home;
