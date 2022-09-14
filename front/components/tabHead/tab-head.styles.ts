import styled from "styled-components";

export const TabHeadContainer = styled.div`
	font-size: 24px;
	line-height: 32px;
	font-family: PT, sans-serif;
	font-weight: 400;
	color: #1f2124;
	max-width: 230px;
	height: 240px;
	padding: 0 32px;
	background: rgba(255, 255, 255, 0.3);
	border-radius: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: all 0.2s ease-in;

	&:hover,
	&.active-tab {
		background: rgba(255, 255, 255, 0.3);
		box-shadow: 0px 14px 24px rgba(31, 33, 36, 0.1);
		backdrop-filter: blur(8px);
		border-radius: 32px;
		transform: scale(1.1) translateY(-12px);
		cursor: pointer;
	}
`;
