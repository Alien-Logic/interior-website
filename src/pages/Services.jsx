import React from "react";
import ContactLink from "../components/contactlink/ContactLink";
import Features from "../components/features/Features";
import Header from "../components/header/Header"
import { services } from "../data/services";

const Services = () => {
  return (
    <div>
      <Header img={"/services.svg"} title={"Services"} path={"Home / Services"} />
      <Features data={services.features} />
      <ContactLink />
    </div>
  );
};

export default Services;
