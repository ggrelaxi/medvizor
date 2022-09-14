import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: flex;
	flex: 0 0 auto;
	align-items: center;
	height: 84px;
	justify-content: space-between;
	gap: 30px;
	margin: 0 40px;

	.header-button {
		margin: 0 50px 0 auto;
	}

	a {
		text-transform: uppercase;
		color: #1f2124;
	}

	img {
		cursor: pointer;
	}
`;

export const HeaderButton = styled.button`
	background: none;
	border: 1px solid #e84a22;
	border-radius: 12px;
	color: #e84a22;
	opacity: 0.6;
	padding: 12px 40px;
	cursor: pointer;
`;
