import React from 'react'

const About = ({heading}) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={require("../../../assets/aboutImg.jpg")} alt="" />
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            delectus dolor culpa recusandae nihil placeat, voluptates inventore
            voluptate quos obcaecati incidunt blanditiis a vero labore modi
            libero aperiam consequatur ab. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cumque delectus dolor culpa recusandae
            nihil placeat, voluptates inventore voluptate quos obcaecati
            incidunt blanditiis a vero labore modi libero aperiam consequatur
            ab.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat voluptate commodi ipsam ipsa! Ab cumque delectus sequi placeat distinctio totam, nesciunt repellat unde dicta nostrum optio expedita, maxime est.</p>
        </div>
      </section>
    </>
  );
}

export default About