import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer";
import Card from "./Component/Card";

import "./PricingStyles.css"

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Header heading="Pricing Page" />
      <Card/>
      <Footer />
    </>
  );
}

export default Pricing