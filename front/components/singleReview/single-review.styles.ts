import styled from "styled-components";

export const ReviewContainer = styled.div`
	background: #ffffff;
	box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
	border-radius: 32px;
	padding: 32px;
	width: 33%;

	.name {
		font-size: 16px;
		line-height: 20px;
		color: #626466;
		margin-bottom: 16px;
		display: flex;
		align-items: end;

		img {
			margin-right: 10px;
		}
	}

	.review {
		font-size: 18px;
		line-height: 24px;
		color: #1f2124;
	}
`;
