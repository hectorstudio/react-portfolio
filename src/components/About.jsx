import React from 'react';
import styled from "styled-components";
import Categorie1 from "../assets/icon/categorie1.svg";
import Categorie2 from "../assets/icon/categorie2.svg";
import Categorie3 from "../assets/icon/categorie3.svg";
import Categorie4 from "../assets/icon/categorie4.svg";

const Div = styled.div`
  margin-top: 60px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px 400px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const Category = styled.div`
  box-sizing: border-box;
  margin: 32px;
  padding: 16px;
  background: white;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border-radius: 5px;
  :hover {
    box-shadow: 0 0 20px 1px rgb(0, 0, 0, 0.1);
  }
`;
const Headline = styled.div`
  font-size: 2em;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 1.6em;
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 16px;
  width: 100%;
  justify-content: center;
`;

const Icon = styled.img`
  object-fit: contain;
  width: 20%;
`;

const List = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  margin-bottom: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  :first-child {
    margin-top: 16px;
  }
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: ${(props) =>
    props.inverse ? "rgba(71, 217, 202, 0.38)" : "rgba(138, 151, 238, 0.38)"};
  width: 20px;
  height: 20px;
  margin-right: 14px;

  div {
    background: ${(props) => (props.inverse ? " #47d9ca" : "#8a97ee")};

    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 2;
  }
`;

const Text = styled.div`
  max-width: 300px;
  line-height: 1.2;
`;

const About = (props) => {
  return (
    <Div>
      <Category>
        <Headline>Programming & Design</Headline>
        <Content>
          <Icon src={Categorie1}></Icon>
          <List>
            <Item>
              <Point inverse>
                <div></div>
              </Point>
              <Text>
                Developing with React, Redux, Gatsby, Next.js, Node.js for 5 years
              </Text>
            </Item>
            <Item>
              <Point inverse>
                <div></div>
              </Point>
              <Text>3 years of Front-End Team Lead Experience</Text>
            </Item>
            <Item>
              <Point inverse>
                <div></div>
              </Point>
              <Text>
                Requirements Analysis & TDD are not foreign
                words to me
              </Text>
            </Item>
          </List>
        </Content>
      </Category>
      <Category>
        <Headline>Research</Headline>
        <Content>
          <Icon src={Categorie2}></Icon>
          <List>
            <Item>
              <Point>
                <div></div>
              </Point>
              <Text>Computer Science</Text>
            </Item>
            <Item>
              <Point>
                <div></div>
              </Point>
              <Text>Software Engineering</Text>
            </Item>
            <Item>
              <Point>
                <div></div>
              </Point>
              <Text>Cyber Security</Text>
            </Item>
          </List>
        </Content>
      </Category>
      <Category>
        <Headline>Globally Present</Headline>
        <Content>
          <Icon src={Categorie3}></Icon>
          <List>
            <Item>
              <Point>
                <div></div>
              </Point>
              <Text>English C1-certified</Text>
            </Item>
            <Item>
              <Point>
                <div></div>
              </Point>
              <Text>Joined international Communities</Text>
            </Item>
            <Item>
              <Point>
                <div></div>
              </Point>
              <Text>Attended international conferences and meet-ups</Text>
            </Item>
          </List>
        </Content>
      </Category>
      <Category>
        <Headline>Searching for a Challenge</Headline>
        <Content>
          <Icon src={Categorie4}></Icon>
          <List>
            <Item>
              <Point inverse>
                <div></div>
              </Point>
              <Text>Participated in 2 Hackathons</Text>
            </Item>
            <Item>
              <Point inverse>
                <div></div>
              </Point>
              <Text>Award winning Project</Text>
            </Item>
            <Item>
              <Point inverse>
                <div></div>
              </Point>
              <Text>Drive to learn something new everyday</Text>
            </Item>
          </List>
        </Content>
      </Category>
    </Div>
  );
};

export default About;
