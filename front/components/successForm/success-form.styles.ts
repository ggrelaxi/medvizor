import styled from "styled-components";

export const SuccessFormContainer = styled.div`
	position: fixed;
	background: rgba(31, 33, 36, 0.6);
	backdrop-filter: blur(4px);
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;

	.form-container {
		position: relative;
		background-color: #fff;
		padding: 32px 56px;
		border-radius: 24px;
		max-width: 540px;
		text-align: center;

		h3 {
			margin-bottom: 24px;
		}

		.success-text {
			font-size: 24px;
			line-height: 32px;
			color: #1f2124;
			margin-bottom: 8px;
		}

		div[class*="ButtonContainer"] {
			width: 100%;

			button {
				width: 100%;
			}
		}
	}
`;
