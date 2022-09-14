import styled from "styled-components";

export const MainPageContent = styled.div`
	.search-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 78px 0 160px 0;
	}

	h2 {
		margin-bottom: 24px;
	}

	.main-description {
		max-width: 730px;
		font-size: 24px;
		line-height: 32px;
		font-weight: 400;
		margin-bottom: 70px;
	}

	.tab-headers {
		display: flex;
		gap: 32px;
		justify-content: space-between;
	}

	.tab-contents {
		margin-top: 72px;
		margin-bottom: 72px;
		max-width: 840px;
		font-size: 32px;
		line-height: 40px;
		font-weight: 400;

		span {
			color: #e84a22;
		}

		.additional-tab-list {
			margin-top: 40px;
			list-style-type: none;
			font-size: 24px;
			line-height: 32px;

			li:before {
				content: url("/images/icons/heart-icon.svg");
				margin-right: 18.5px;
			}
			li {
				margin-bottom: 16px;
			}
			li:last-child {
				margin-bottom: 0;
			}
		}
	}
`;
