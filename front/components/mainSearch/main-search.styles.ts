import styled from "styled-components";

export const MainSearchContainer = styled.div`
	max-width: 500px;
	width: 100%;

	.header-container {
		font-size: 24px;
		line-height: 32px;
		font-weight: 400;
		margin-bottom: 12px;
		text-align: center;
	}

	.search-picker {
		display: flex;
		gap: 40px;
		font-size: 64px;
		line-height: 70px;
		color: #1f2124;
		justify-content: center;
		margin-bottom: 32px;

		& > div {
			cursor: pointer;
		}

		.active {
			color: #e84a22;
			font-weight: 700;
		}
	}

	.place-picker {
		padding: 26px 32px;
		background-color: #fff;
		border-radius: 24px;
		color: #1f2124;
		font-size: 24px;
		line-height: 32px;
		font-weight: 400;
		margin-bottom: 16px;
	}

	.search-input {
		margin-bottom: 40px;
	}
`;
