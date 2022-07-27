import "./Header.css";

import headerImg from "../../assets/heroImg.jpg";

const Header = ({ heading }) => {
  return (
    <section
      className="header"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
    >
      <h1>{heading}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
        veritatis?
      </p>
    </section>
  );
};

export default Header;
