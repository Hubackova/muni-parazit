import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import ImgSlider from "./ImgSlider";
import HeaderTop from "./HeaderTop";

import logo from "../../static/images/logo3.png";
import mainLogo from "../../static/images/mainLogo.png";
import logoSci from "../../static/images/logoSci.png";
import { isSafari, isIOS } from "react-device-detect";

//query must be inline!!! not as a variable!
const Header = ({ isIndex, generalData }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)/" }
            relativeDirectory: { eq: "homepage" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 3200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const imgs = data.images.edges.map((i) => i.node.childImageSharp.fluid);
      return (
        <Fragment>
          <HeaderTop generalData={generalData} isIndex={isIndex} />
          {isSafari || isIOS ? (
            <IosHeader>
              {" "}
              {/*  <MainLogo src={mainLogo} alt="mainLogo" /> */}logo
            </IosHeader>
          ) : (
            <SubContainer>
              <LeftSide>
                <LogoLink href="http://www.botzool.sci.muni.cz" target="_blank">
                  <Logo src={logo} alt="logo" />
                </LogoLink>
                {/*  <MainLogo src={mainLogo} alt="mainLogo" /> */}logo
                <LogoLink href="http://www.sci.muni.cz" target="_blank">
                  <Logo src={logoSci} alt="logoSci" />
                </LogoLink>
              </LeftSide>

              <RightSide>{/* <ImgSlider imgs={imgs} /> */}</RightSide>
            </SubContainer>
          )}
        </Fragment>
      );
    }}
  />
);

export default Header;

Header.propTypes = {
  language: PropTypes.object,
  isIndex: PropTypes.bool,
  generalData: PropTypes.object,
};

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  padding-bottom: 2em;
`;
const LeftSide = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  @media (max-width: 2000px) {
    flex-wrap: wrap;
  }
`;
const IosHeader = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.main};
  margin-bottom: 30px;
`;
const LogoLink = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 50%;
  margin: 10px;
`;

const MainLogo = styled.img`
  max-width: 40%;
  margin-left: 2%;
  margin-right: 15px;
  @media (max-width: 1520px) {
    max-width: 30%;
  }
`;

const RightSide = styled.div`
  flex: 1;
  @media (max-width: 1400px) {
    width: 100%;
  }
  background: lightgrey;
`;
