import React from "react";
import styled from "styled-components";
import Developer from "../assets/icon/developer.svg";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 1024px) {
		margin-top: 100px;
	}

	img {
		object-fit: contain;
		max-width: 400px;
	}
`;

const Github = () => {
	return (
		<Container>
			<img src={Developer} alt="developer"></img>
		</Container>
	);
};

export default Github;
