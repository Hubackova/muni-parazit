import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../MainContainer";
import H2 from "../atoms/H2";
import Ul from "../atoms/Ul";

const Links = ({ mediaData, popularizationData, data, lang }) => {
  const mediaList = mediaData.map((i) => {
    const resources = i.resources.map((src, index) => {
      if (!i.links || !i.links[index]) return `${src}, `;
      return (
        <A
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={i.links[index]}
        >
          {index === i.resources.length - 1 ? src : `${src}, `}
        </A>
      );
    });
    return (
      <li key={i.name}>
        {i.date} {i.name}, {resources}
      </li>
    );
  });
  const popularizationList = popularizationData.map((i) => {
    const resources = i.resources.map((src, index) => {
      if (!i.links || !i.links[index]) return `${src}, `;
      return (
        <A
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={i.links[index]}
        >
          {index === i.resources.length - 1 ? src : `${src}, `}
        </A>
      );
    });
    return (
      <li key={i.name}>
        {i.date} {i.name}, {resources}
      </li>
    );
  });
  return (
    <MainContainer>
      <FlexBox>
        <div>
          <H2> {data.links.publications} </H2>
          <a href="https://botzool.sci.muni.cz/publikace/g">
            https://botzool.sci.muni.cz/publikace/g
          </a>
          {lang === "cz" && <H2> {data.links.popularization} </H2>}
          <Ul>{/* {popularizationList} */}</Ul>
        </div>
        <div>
          <H2> {data.links.media} </H2>
          <Ul>{/* {mediaList} */}</Ul>
        </div>
      </FlexBox>
    </MainContainer>
  );
};

Links.propTypes = {
  popularizationData: PropTypes.object,
  mediaData: PropTypes.object,
  data: PropTypes.object,
  lang: PropTypes.string,
};

export default Links;

const A = styled.a`
  color: ${(props) => props.theme.darkMain};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FlexBox = styled.div`
  display: grid;
  grid-column-gap: 3em;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${(props) => props.theme.largeDevice}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
