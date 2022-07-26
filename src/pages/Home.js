import HeroSection from "../components/HeroSection";
import Filler from "../components/Filler";
import Connected from "../components/Connected";
import {
  homeDataOne,
  homeDataThree,
  homeDataTwo,
  homeDataFour,
} from "../Data/data";

const Home = () => {
  return (
    <>
      <HeroSection {...homeDataOne} />
      <HeroSection {...homeDataTwo} />
      <Filler />
      <HeroSection {...homeDataThree} />
      <Connected />
      <HeroSection {...homeDataFour} />
    </>
  );
};

export default Home;
