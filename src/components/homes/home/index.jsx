import React from "react";
import AboutArea from "./about-area";
import ChooseArea from "./choose-area";
import CounterArea from "../../../common/counter-area";
import HeroBanner from "./hero-banner";
import NewsArea from "./news-area";
import ServicesArea from "./service-area";

const Home = () => {
  return (
    <>
      <HeroBanner />
      {/* Princiapls Message */}
      <AboutArea />
      {/* Vision mission */}
      <ChooseArea />
      <CounterArea />
      {/* News & Achievements */}
      <NewsArea />
      {/* Our Latest services */}
      <ServicesArea />
    </>
  );
};

export default Home;
