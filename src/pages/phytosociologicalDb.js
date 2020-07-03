import React, {  useContext } from "react";
import styled from "styled-components";

import MainContainer from "../components/MainContainer";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/phytosociologicalDb/phytosociologicalDb";
import { en as turbowegEn, cz as turbowegCz } from "../content/phytosociologicalDb/turboweg";
import { PhytoContext } from "../layouts/PhytoContext";



const PhytosociologicalDbPage = () => {
  const {opened, setOpened, turbowegOpened, setTurbowegOpened } = useContext(PhytoContext)

  return (
    <MainContainer>
      <Consumer>
        {({ int }) => {
          const data = int === "en" ? en : cz;
          const turboweg = int === "en" ? turbowegEn : turbowegCz;
          const turbowegContent = (
            <div>
              {turboweg["intro"]}
              {turboweg.menu.map(i => (
                <Li
                  key={i.name}
                  onClick={() => setTurbowegOpened(i.name)}
                  className={opened === i.name && "active"}
                >
                  {i.text}
                </Li>
              ))}
              <hr />
              {turboweg[turbowegOpened]}
            </div>
          );
          const content = opened === "turboweg" ? turbowegContent : data[opened];
          return (
            <Container>
              <Menu>
                {data.menu.map(i => (
                  <Li
                    key={i.name}
                    onClick={() => setOpened(i.name)}
                    className={opened === i.name && "active"}
                  >
                    {i.text}
                    {i.name === "turboweg" && opened === "turboweg" && (
                      <Ul>
                        {turboweg.menu.map(i => (
                          <Li
                            key={i.name}
                            onClick={() => setTurbowegOpened(i.name)}
                            className={opened === i.name && "active"}
                          >
                            {i.text}
                          </Li>
                        ))}
                      </Ul>
                    )}
                  </Li>
                ))}
              </Menu>
              <Content>{content}</Content>
            </Container>
          );
        }}
      </Consumer>
    </MainContainer>
  );
};

PhytosociologicalDbPage.propTypes = {};

export default PhytosociologicalDbPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1256px) {
    flex-direction: column;
    margin: 0 1em;
  }
`;

const Menu = styled.div`
  flex: 1;
  margin-right: 2em;
  min-width: 283px;
`;

const Content = styled.div`
  flex: 3;
`;

const Ul = styled.ul`
  list-style-type: circle;
  margin: 0;
`;

export const Li = styled.li`
  cursor: pointer;
  color: ${props => props.theme.grey};
  white-space: "nowrap";
  &:hover {
    color: ${props => props.theme.main};
  }
  &.active {
    color: ${props => props.theme.darkMain};
  }
`;
