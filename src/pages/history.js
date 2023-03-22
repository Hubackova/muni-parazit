import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/eva";

const EvaPage = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return <Container>TBD</Container>;
    }}
  </Consumer>
);

EvaPage.propTypes = {};

export default EvaPage;
const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;
