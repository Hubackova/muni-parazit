import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, Element } from "react-scroll";

import PersonBox from "./PersonBox";
import H2 from "../atoms/H2";
import Uparrow from "../atoms/Uparrow";
import { Container as MenuContainer, Li } from "../../layouts/Navigation";

class People extends Component {
  render() {
    const { peopleData, msg, formerPeopleData, visitingScientistsData } =
      this.props;
    const phdStudents = peopleData.phdStudents.map((i) => (
      <PersonBox personInfo={i} key={i.id} msg={msg} />
    ));
    const employees = peopleData.employees.map((i) => (
      <PersonBox personInfo={i} key={i.id} msg={msg} />
    ));
    const formerPeople = formerPeopleData.map((person) => (
      <div key={person.name}>
        <strong style={{ color: "#C0C844" }}>{person.name}</strong>
        {person.email && (
          <span>
            {" "}
            - <a href={`mailto:${person.email}`}>{person.email}</a>
          </span>
        )}
      </div>
    ));
    const visitingScientists = visitingScientistsData.map((person) => (
      <div key={person.name}>
        <strong style={{ color: "#C0C844" }}>{person.name}</strong>
      </div>
    ));
    return (
      <React.Fragment>
        <MenuContainer>
          <Li isVisible={true}>
            <StyledLink
              activeClass="active"
              to="employees"
              spy={true}
              smooth={true}
              duration={500}
            >
              {msg.people.employees}
            </StyledLink>
          </Li>
          <Li isVisible={true}>
            <StyledLink
              activeClass="active"
              to="phdStudents"
              spy={true}
              smooth={true}
              duration={500}
            >
              {msg.people.phdStudents}
            </StyledLink>
          </Li>
          <Li isVisible={true}>
            <StyledLink
              activeClass="active"
              to="formerpeople"
              spy={true}
              smooth={true}
              duration={500}
            >
              {msg.people.formerPeople}
            </StyledLink>
          </Li>
          <Li isVisible={true}>
            <StyledLink
              activeClass="active"
              to="visitingScientists"
              spy={true}
              smooth={true}
              duration={500}
            >
              {msg.people.visitingScientistsShort}
            </StyledLink>
          </Li>
        </MenuContainer>

        <Element name="employees" className="element">
          <H2>{msg.people.employees}</H2>
        </Element>
        {employees}
        <br />
        <Uparrow text={msg.up} />
        <br />
        <Element name="phdStudents" className="element">
          <H2>{msg.people.phdStudents}</H2>
        </Element>
        {/*         {phdStudents} */}
        <br />
        <Uparrow text={msg.up} />
        <br />
        <Element name="formerpeople" className="element">
          <H2>{msg.people.formerPeople}</H2>
        </Element>
        {formerPeople}
        <br />
        <Uparrow text={msg.up} />
        <br />
        <Element name="visitingScientists" className="element">
          <H2>{msg.people.visitingScientists}</H2>
        </Element>
        {visitingScientists}
        <br />
        <Uparrow text={msg.up} />
        <br />
      </React.Fragment>
    );
  }
}

export default People;

People.propTypes = {
  msg: PropTypes.object,
  studentsData: PropTypes.array,
  peopleData: PropTypes.array,
  formerPeopleData: PropTypes.array,
};

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.grey};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${(props) => props.theme.secondary};
  }
`;
