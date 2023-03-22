import React from "react";
import { injectGlobal } from "styled-components";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import Homepage from "../components/homepage/Homepage";
import Important from "../components/homepage/Important";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";

const index = () => {
  return (
    <Consumer>
      {({ int }) => (
        <ContainerWrapper>
          TBD
          {/*           <Homepage />
          <Important text={int === "en" ? en : cz} style={{ flex: 1 }} /> */}
        </ContainerWrapper>
      )}
    </Consumer>
  );
};

export default index;

index.propTypes = {
  location: PropTypes.object,
};

// TODO: move this section to gatsby-browser after solving the issue with global styles: https://github.com/gatsbyjs/gatsby/issues/7447
injectGlobal`
html, body, #___gatsby, #___gatsby>div {
    width: 100%;
    margin: 0;
}

* {
    box-sizing: border-box
}

body {
    font-family: Calibri, sans-serif;
    font-size: calc(17px + .25vw);
    letter-spacing: -.25px;
    line-height: calc(1.5em + .2vw);
    color: #333;
}

body h1, body h2 {
  line-height: 1.2;
}

h1 {
  font-size: calc(22px + 1.6vw);
}

h2 {
  font-size: calc(24px + .25vw);
  font-weight: bold;
}

h2 + ul {
  list-style-type:none;
  padding: 0;
  line-height: 1.2em;
}

h2 + ul > li {
  margin-bottom: 1em;
}

h3 {
  border-bottom: 0.08em solid rgb(229, 229, 229);
}

a {
  color: darkBlue;
}

.carousel .slide {
  background: linear-gradient(#3E7404, #778F55, #A4AF8D, white) !important;
}

/* PROJECTS STYLING */
.project-publication {
  border: 1px solid #0868ac;
  padding: 0 20px;
  background-color: #d2e3ef;
  li {padding-bottom: 15px}
  h3 {border-bottom: 1px solid #0868ac}
  margin-top: 15px;
}

.project-theses {
  border: 1px solid #a8ddb5;
  padding: 0 20px;
  background-color: #d7efdd;
  margin-top: 15px;
}

.main-results{  
  border: 1px solid #C0C844;
  padding: 0 20px;
  background-color: #e5e6cc;
  margin-top: 15px;
  h3 {border-bottom: 1px solid #C0C844}
}

.project-body > p {
  text-align: justify;
}

.gallery-img {
  cursor: pointer;
  padding: 0.2rem 0;
}

.en .cz{
  display: none;
}

.cz .en{
  display: none;
}

.phytoSocDb-thanksList {
  columns: 3;
  li {
    white-space: nowrap;
  }
  @media (max-width: 780px) {
    columns: 2;
  }
  @media (max-width: 480px) {
    columns: 1;
  }
}

.fyto-item {
  display: grid;
  grid-template-columns: 1fr 5rem 5rem 5rem;
  border-bottom: 1px solid gray;
  a {
    padding: 0 1rem;
  }
}
`;
