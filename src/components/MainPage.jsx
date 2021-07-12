import React from 'react';
import styled, { keyframes } from "styled-components";
import Skill from "./Skill";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Github from "./Github";
import Scroll  from "../assets/icon/scroll.svg";
import Amazon  from "../assets/icon/amazon.svg";
import Docker  from "../assets/icon/docker.svg";
import Terminal  from "../assets/icon/terminal.svg";
import VSCode  from "../assets/icon/vscode.svg";
const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	width: 80%;
	@media (min-width: 1025px) and (max-width: 1280px) {
	}
	@media (min-width: 320px) and (max-width: 1024px) {
		width: 100%;
	}
`;

const TextContainer = styled.div`
	min-width: 400px;
	h1 {
		font-size: 2.6em;
		font-weight: 400;
		color: black;
	}
	h2 {
		width: 400px;
		line-height: 1.5;
		font-weight: 400;
		font-size: 1.4em;
		color: ${props => props.theme.gray};
	}
	@media (min-width: 320px) and (max-width: 767px) {
		text-align: center;
	}
`;

const LandingPage = styled.div`
	height: 92vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
	align-items: center;
	padding-left: 32px;
	padding-right: 32px;
	@media (min-width: 320px) and (max-width: 1024px) {
		justify-content: center;
	}
`;
const MoveUpDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
`;
const ScrollDown = styled.div`
	height: 6vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
  cursor: pointer;
	animation: ${MoveUpDown} 0.6s infinite alternate;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;

	@media (max-width: 1024px) {
		margin-top: 100px;
		justify-content: center;
		align-items: center;
	}

	img {
		object-fit: contain;
		max-width: 400px;
	}
`;
const Skills = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1024px) {
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;

const SkillContainer = styled.div`
	margin-top: 30px;
	width: 100%;
	max-width: 600px;
	@media (max-width: 1024px) {
		width: 90%;
	}
`;

const Headline = styled.div`
	margin-top: 64px;
	width: 100%;
	text-align: center;
	font-size: 2em;
`;

const Tools = styled.div`
	width: 80%;
	margin: 30px 30px 30px 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const MainPage = () => {
	return (
		<Root>
			<Container>
				<LandingPage>
					<TextContainer>
						<h1>Hey, I’m Jeffrey Xue <span>👋</span></h1>
						<h2>Senior Full Stack Developer, <br/> React Specialist, Gatsby/Next Guru, <br/> Front-End Team Lead & Problem Solver</h2>
					</TextContainer>
					<ImageContainer>
						<img src="/profile.png" alt="Profile"></img>
					</ImageContainer>
				</LandingPage>
				<ScrollDown onClick={() => {
          const details = document.getElementById('skills')
          details.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
          })
        }}>
					<img src={Scroll} alt="Scroll Icon"></img>
				</ScrollDown>

				<Headline id="skills">Skills & Tools</Headline>
				<Skills>
					<Github></Github>

					<SkillContainer>
						<Skill name="JavaScript" time="7 years" progress="100" />
						<Skill name="TypeScript" time="5 years" progress="70" />
						<Skill name="React" time="5 years" progress="70" />
						<Skill name="Redux" time="5 years" progress="70" />
						<Skill name="Gatsby" time="3 years" progress="45" />
						<Skill name="Next.js" time="3 years" progress="45" />
						<Skill name="Node.js" time="6 years" progress="90" />
						<Skill name="Nest" time="2 years" progress="38" />
						<Skill name="Docker" time="4 years" progress="60" />
						<Skill name="AWS" time="3 years" progress="50" />
						<Tools>
							<div>Tools</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									width: "100%",
									flexDirection: "row-reverse"
								}}>
								<img
									width="40"
									src={Amazon}
									style={{ margin: "8px" }} alt="tool icon"></img>
								<img
									width="40"
									src={Docker}
									style={{ margin: "8px" }} alt="tool icon"></img>
								<img
									width="40"
									src={Terminal}
									style={{ margin: "8px" }} alt="tool icon"></img>
								<img
									width="40"
									src={VSCode}
									style={{ margin: "8px" }} alt="tool icon"></img>
							</div>
						</Tools>
					</SkillContainer>
				</Skills>
				<Headline id="projects">Projects</Headline>

				<Projects />

				<Headline id="about">About Me</Headline>

				<About />

				<div id="contact"></div>
				<Contact></Contact>
			</Container>
		</Root>
	);
};

export default MainPage;
