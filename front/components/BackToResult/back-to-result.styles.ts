import styled from "styled-components";

export const BackToResultContainer = styled.div`
	font-size: 24px;
	line-height: 32px;
	color: #1f2124;
	position: relative;
	padding-left: 40px;
	cursor: pointer;

	&:before {
		position: absolute;
		top: 5px;
		left: 0;
		content: url("/images/icons/arrow-left.svg");
	}
`;
