import React from 'react';
import styled from "styled-components";
import Card from "./Card";
import Amazon  from "../assets/icon/amazon.svg";
import Docker  from "../assets/icon/docker.svg";
import Angular  from "../assets/icon/angular.svg";
import Firebase  from "../assets/icon/firebase.svg";
import Laravel  from "../assets/icon/laravel.svg";
import Node  from "../assets/icon/node.js.svg";
import Redux  from "../assets/icon/redux.svg";
import Shopify  from "../assets/icon/shopify.svg";
import Vue  from "../assets/icon/vue.svg";
import ReactIcon from "../assets/icon/react.svg";
import Reportersuite from "../assets/website/reportersuite.png";
import Stuff from "../assets/website/stuff.png";
import Magnolia from "../assets/website/magnolia.png";
import Whatsong from "../assets/website/whatsong.png";
import Mypvolve from "../assets/website/mypvolve.png";
import WorkspceGeek from "../assets/website/workspacegeek.png";

const Item = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background: ${props => (props.background ? props.background : "#ffffff")};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	:hover {
		div {
			opacity: 1;
		}
	}
`;

const ProjectDiv = styled.div`
	width: 100%;
	margin-top: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(4, 400px);

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(7, 400px);
	}
`;

const Projects = props => (
	<ProjectDiv>
		<Item background={"#F4F4F4"}>
      <img style={{width: '100%'}} src={Reportersuite} alt="Portfolio"></img>
			<Card>
				<Card.Header>
					<div>9 people</div>
					<div>9 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Reporter Suite app</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src={ReactIcon} alt="Skill Icon"></img>
					<img width="40" src={Redux} alt="Skill Icon"></img>
					<img width="40" src={Node} alt="Skill Icon"></img>
					<img width="40" src={Docker} alt="Skill Icon"></img>
					<img width="40" src={Amazon} alt="Skill Icon"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#2F2E41"}>
      <img style={{width: '100%'}} src={Magnolia} alt="Portfolio"></img>
			<Card>
				<Card.Header>
					<div>2 people</div>
					<div>5 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Magnolia Farms's eCommerce</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src={ReactIcon} alt="Skill Icon"></img>
					<img width="40" src={Node} alt="Skill Icon"></img>
					<img width="40" src={Firebase} alt="Skill Icon"></img>
					<img width="40" src={Shopify} alt="Skill Icon"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#0F9688"}>
      <img style={{width: '100%'}} src={Whatsong} alt="Portfolio"></img>
			<Card>
				<Card.Header>
					<div>Solo project</div>
					<div>3 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Soundtracks App</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src={ReactIcon} alt="Skill Icon"></img>
					<img width="40" src={Redux} alt="Skill Icon"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#CE5E5E"}>
      <img style={{width: '100%'}} src={Stuff} alt="Portfolio"></img>
			<Card>
				<Card.Header>
					<div>5 people</div>
					<div>6 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Stuff4Hire</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src={ReactIcon} alt="Skill Icon"></img>
					<img width="40" src={Redux} alt="Skill Icon"></img>
					<img width="40" src={Node} alt="Skill Icon"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#303F9F"}>
      <img style={{width: '100%'}} src={Mypvolve} alt="Portfolio"></img>
			<Card>
				<Card.Header>
					<div>9 people</div>
					<div>7 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Fitness Website</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src={Vue} alt="Skill Icon"></img>
					<img width="40" src={Laravel} alt="Skill Icon"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item background={"#F4F4F4"}>
      <img style={{width: '100%'}} src={WorkspceGeek} alt="Portfolio"></img>
			<Card>
				<Card.Header>
					<div>12 people</div>
					<div>16 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>Workspace Geek</Card.Title>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src={Angular} alt="Skill Icon"></img>
					<img width="40" src={Node} alt="Skill Icon"></img>
					<img width="40" src={Docker} alt="Skill Icon"></img>
					<img width="40" src={Amazon} alt="Skill Icon"></img>
				</Card.Stack>
			</Card>
		</Item>
	</ProjectDiv>
);

export default Projects;
