import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import FooterContent from "./Footer";
import { IntProvider, Consumer } from "./Context";
import { PhytoContextProvider } from "./PhytoContext";

import SEO from "../components/SEO";
import { cz, en } from "../content/general";

const blueTheme = {
  main: "lightblue",
  secondary: "blue",
  terciary: "blue",
  darkMain: "darkblue",
  green: "#3E7404",
  lightGreen: "#578724",
  grey: "#969696",
  white: "white",
  black: "black",
  smallDevice: "480px",
  mediumDevice: "768px",
  largeDevice: "1024px",
  extraLargeDevice: "1600px",
};

const Layout = (props) => {
  const {
    location: { pathname },
  } = props;
  const isIndex = pathname === "/";
  return (
    <IntProvider>
      <ThemeProvider theme={blueTheme}>
        <PhytoContextProvider>
          <Consumer>
            {({ int }) => (
              <Container>
                <SEO />
                <Header
                  isIndex={isIndex}
                  generalData={int === "en" ? en : cz}
                />
                <Main>{props.children}</Main>
                <footer>
                  <FooterContent
                    footer={int === "en" ? en.footer : cz.footer}
                  />
                </footer>
              </Container>
            )}
          </Consumer>
        </PhytoContextProvider>
      </ThemeProvider>
    </IntProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;
