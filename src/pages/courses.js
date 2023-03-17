import React from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import MainContainer from "../components/MainContainer";
import { coursesCz, coursesEn } from "../content/courses";
import { thesesEn, thesesCz } from "../content/theses";
import Theses from "../components/theses/Theses";

const Courses = () => {
  const getCoursesList = (courses) =>
    courses.map((i) => {
      return (
        <li key={i.name}>
          {i.link ? (
            <A target="_blank" rel="noopener noreferrer" href={i.link}>
              {i.name}
            </A>
          ) : (
            i.name
          )}
        </li>
      );
    });

  return (
    <MainContainer>
      <Consumer>
        {({ int }) => {
          return (
            <CoursesThesesWrapper>
              TBD
              {/*               <div style={{ flex: 1 }}>
                <h2>{int === "en" ? "Courses" : "Výuka"}</h2>
                {int === "en" ? getCoursesList(coursesEn) : getCoursesList(coursesCz)}
              </div>
              <div style={{ flex: 1 }}>
                <Theses thesesData={int === "en" ? thesesEn : thesesCz} />
              </div> */}
            </CoursesThesesWrapper>
          );
        }}
      </Consumer>
    </MainContainer>
  );
};

export default Courses;

const A = styled.a`
  color: ${(props) => props.theme.darkMain};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CoursesThesesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.largeDevice}) {
    flex-direction: column;
  }
`;
