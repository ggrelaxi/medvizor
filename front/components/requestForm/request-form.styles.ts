import styled from "styled-components";

export const RequestFormContainer = styled.div`
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

	.fio-container {
		margin-bottom: 16px;
	}

	.phone-container {
		margin-bottom: 32px;
	}

	label {
		font-size: 16px;
		line-height: 20px;
		color: #626466;
		display: block;
		margin-bottom: 8px;
	}

	input {
		font-size: 18px;
		line-height: 24px;
		color: #1f2124;
		padding: 12px 24px;
		border-color: #1f2124;
		border-radius: 12px;
		width: 100%;

		&:placeholder {
			color: #626466;
		}

		&:focus,
		&:active {
			outline: none;
		}
	}

	textarea {
		padding: 12px 16px;
		font-size: 18px;
		line-height: 24px;
		color: #1f2124;
		border-radius: 12px;
		border: 1px solid #1f2124;
		width: 100%;
		margin-bottom: 40px;

		&:placeholder {
			color: #626466;
		}

		&:focus,
		&:active {
			outline: none;
		}
	}

	.form-container {
		position: relative;
		background-color: #fff;
		padding: 32px 56px;
		border-radius: 24px;

		h3 {
			margin-bottom: 24px;
		}

		.close {
			position: absolute;
			width: 40px;
			height: 40px;
			content: url("/images/icons/close-icon.svg");
			background: rgba(255, 255, 255, 0.7);
			box-shadow: 0px 4px 4px rgba(31, 33, 36, 0.1);
			backdrop-filter: blur(6px);
			top: -10px;
			right: -10px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			padding: 10px;
		}
	}
`;
