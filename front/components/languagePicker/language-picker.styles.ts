import styled from "styled-components";

export const LanguagePickerContainer = styled.div`
	position: relative;

	.locale-view {
		width: 40px;
		display: flex;
		align-items: center;
		cursor: pointer;
		color: #1f2124;

		img {
			margin-left: 9px;
		}
	}

	.locales-list {
		position: absolute;
		top: 40px;
		left: -20px;
		transition: all 0.5s ease-in;
		background: #ffffff;
		box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
		border-radius: 12px;
		padding: 10px 0;

		button {
			background: none;
			color: #000;
			padding: 8px 24px;
			border: none;
			cursor: pointer;
		}
		button:hover {
			background: #eef4f5;
		}
	}
`;

export const ArrowDown = styled.img``;
