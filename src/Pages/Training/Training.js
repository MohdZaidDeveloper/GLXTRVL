import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import About from "../Home/Components/About"

const Training = () => {
  return (
    <>
      <Navbar />
      <Header heading="Training Page" />
      <About heading="Training"/>
      <Footer />
    </>
  );
};

export default Training;
