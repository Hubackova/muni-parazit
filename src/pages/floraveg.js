import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/floraveg";

const FloravegPage = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return <Container>{data.body}</Container>;
    }}
  </Consumer>
);

FloravegPage.propTypes = {};

export default FloravegPage;
const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;