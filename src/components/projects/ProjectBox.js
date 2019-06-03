import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import projectImg from '../../../static/images/projects/project1.jpg'

class ProjectBox extends Component {
  render() {

    
    const { project, linkTo, isImageOnly } = this.props;
    
    return (
      <StyledLink to={linkTo}>
        <Box>
          <Content>
            {/* {fluid && <Img fluid={fluid} style={{width: "90%"}} />} */}
            <img src={projectImg} width="90%" />
            <Name>{project.title}</Name>
          </Content>
        </Box>
      </StyledLink>
    );
  }
}
export default ProjectBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border: 1px solid black;

  padding: 1em;
  line-height: 1.1em;
  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Name = styled.h5`
  color: ${props => props.theme.lightblue};
  width: 90%;
  text-transform: uppercase;
  margin-top: 1em;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`;

//todo: similar with staff
const StyledLink = styled(Link)`
  text-decoration: none;
`;
