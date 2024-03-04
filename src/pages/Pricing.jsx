import React from "react";
import Header from "../components/header/Header";
import Pricings from "../components/pricing/Pricings";

const Pricing = () => {
  return (
    <div>
      <Header
        img={"/pricing.svg"}
        title={"Pricing & Plan"}
        path={"Home / Pricing"}
      />
      <Pricings />
    </div>
  );
};

export default Pricing;
