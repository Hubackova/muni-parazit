import React from "react";

import { Consumer } from "../layouts/Context";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { cz, en } from "../content/projects";

const Projects = ({ data: imgData }) => (
  <Consumer>
    {({ int }) => {
      const projects = int === "en" ? en : cz;
      return (
        <Container>
          TBD
          {/*           <GridWrapper>
            {Object.values(projects.projectsList).map((project) => {
              const img = imgData.allImageSharp.edges.filter((i) =>
                i.node.fixed.src.includes(`${project.name}_${int}`)
              );
              const imgSrc = img.length ? img[0].node.fixed.src : null;
              return (
                <ResourceBox
                  to={`/${project.name}`}
                  key={project.name}
                  img={imgSrc}
                ></ResourceBox>
              );
            })}
          </GridWrapper> */}
        </Container>
      );
    }}
  </Consumer>
);

export default Projects;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20vw);
  grid-template-rows: repeat(2, 20vw);
  grid-gap: 1vw;
  @media (max-width: ${(props) => props.theme.largeDevice}) {
    grid-template-columns: repeat(2, 40vw);
    grid-template-rows: repeat(4, 40vw);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;

const ResourceBox = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: black;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover:after {
    box-shadow: 2px 2px 3px grey;
  }

  ::after {
    content: "";
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 20vw;
    @media (max-width: ${(props) => props.theme.largeDevice}) {
      background-size: 40vw;
    }
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border: 0.5px solid gray;
    border-radius: 12%;
    box-shadow: 5px 5px 5px grey;
  }
`;

export const query = graphql`
  query {
    allImageSharp(filter: { fixed: { src: { regex: "/main-project/" } } }) {
      edges {
        node {
          id
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;
