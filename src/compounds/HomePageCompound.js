import React from "react";
import styled from "styled-components";
import Navbar from "../components/HomePage/Navbar";
import Header from "../components/HomePage/Header";
import Services from "../components/HomePage/Services";
import OurWork from "../components/HomePage/OurWork";
import AboutUs from "../components/HomePage/AboutUs";
import ScrollSection from "../components/HomePage/ScrollSection";
import FindUs from "../components/HomePage/FindUs";
import Footer from "../components/HomePage/Footer";

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Services />
      <OurWork />
      <AboutUs />
      <ScrollSection />
      <FindUs />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default HomePageCompound;