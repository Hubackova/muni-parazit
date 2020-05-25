import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import Lightbox from "react-images";
import { graphql } from "gatsby";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/projects";

class ProjectDetail extends Component {
  state = {
    lightboxIsOpen: false,
    currentImage: 1
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }

  openLightbox = (e, index) => {
    e.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    const {
      data: { allImageSharp }
    } = this.props;

    const name = `project${this.props.location.pathname.split('project')[1]}`

    return (
        <Consumer>
          {({ int }) => {
            const data = int === "en" ? en : cz;
            const projectData = data.projectsList[`${name}${int}`];
            const captions = false;
            const captionsArray = captions ? captions.split("/") : [];

            const imgs =
              allImageSharp &&
              allImageSharp.edges.map((i, index) => (
                <div
                  className="gallery-img"
                  onClick={e => this.openLightbox(e, index)}
                  key={i.node.fluid.src}
                >
                  <Img fluid={i.node.fluid} alt={captionsArray[index]} />
                </div>
              )).slice(2);
            const imgs2 = imgs && imgs.splice(0, Math.ceil(imgs.length / 2));
            const photos =
              allImageSharp &&
              allImageSharp.edges.map((photo, index) =>
                Object.assign({
                  srcSet: photo.node.fluid.srcSet,
                  src: photo.node.fluid.src,
                  caption: captionsArray[index]
                })
              );
            return (
              <NarrowContainer>
                <ImgColumn>{imgs2}</ImgColumn>
                <Content>
                  <Lightbox
                    images={photos}
                    isOpen={this.state.lightboxIsOpen}
                    currentImage={this.state.currentImage}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                  />
                  <h1>{projectData && projectData.title}</h1>

                  <div className={`project-body ${int}`}>{projectData && projectData.body}</div>
                  <StyledLink to="/projects/">
                    <i className="fa fa-arrow-left" />
                  </StyledLink>
                  <ImgMobile>{imgs2 ? imgs2.concat(imgs) : imgs}</ImgMobile>
                </Content>

                <ImgColumn>{imgs}</ImgColumn>
              </NarrowContainer>
            );
          }}
        </Consumer>
    );
  }
}

const NarrowContainer = styled.div`
  display: flex;
`;
const ImgMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ImgColumn = styled.div`
  min-width: 25%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  margin: 20px;
  @media (max-width: 1386px) {
    margin: 0 20px;
  }
`;
//todo: similar with staff
const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

export default ProjectDetail;

ProjectDetail.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const query = graphql`
  query($imgsRegex: String!) {
    allImageSharp(
      filter: { fluid: { src: { regex: $imgsRegex } } }
      sort: { fields: [fluid___originalName], order: ASC }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            originalName
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;
