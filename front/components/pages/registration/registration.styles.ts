import styled from "styled-components";

export const RegistrationContainer = styled.div`
	margin-top: 106px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		margin-bottom: 40px;
	}

	.form-container {
		max-width: 500px;
		width: 100%;

		.tel-container {
			background: #fff;
			border-radius: 24px;
			padding: 22px 32px;
			display: flex;
			align-items: center;
			gap: 16px;
			margin-bottom: 6px;

			.phone-icon {
				max-width: 68px;
				padding: 8px;
				border: 1px solid #8f9092;
				border-radius: 12px;
				font-size: 18px;
				line-height: 24px;
				color: #1f2124;

				img {
					margin-left: 8px;
				}
			}

			.phone-data {
				input {
					border: none;
					font-size: 24px;
					line-height: 32px;
					color: #1f2124;

					&:focus,
					&:active {
						outline: none;
					}
				}
			}
		}
		.password-container,
		.password-confirm-container {
			background: #fff;
			border-radius: 24px;
			padding: 5px 32px;
			margin-bottom: 12px;

			.password-data {
				display: flex;
				align-items: center;

				img {
					cursor: pointer;
				}

				input {
					padding: 0 5px;
					border: none;
					margin-right: 16px;
					width: 100%;
					font-size: 24px;
					line-height: 32px;
					color: #1f2124;
					height: 72px;
					transition-duration: 0s;

					&:active,
					&:focus {
						outline: none;
					}
				}
			}
		}
		.password-confirm-container {
			margin-bottom: 6px;
		}

		.error-container-phone,
		.error-container-password {
			margin-bottom: 12px;
			font-size: 16px;
			line-height: 20px;
			color: #ff002e;
			opacity: 0;

			&.displal {
				opacity: 1 !important;
			}
		}

		div.display {
			opacity: 1;
		}
		.error-container-password {
			margin-bottom: 40px;
		}
	}

	button {
		font-size: 32px !important;
		padding-top: 20px !important;
		padding-bottom: 20px !important;
		border-radius: 24px !important;
		line-height: 40px !important;
		color: #fff;
		margin-bottom: 24px;
	}

	.description-container {
		font-size: 16px;
		line-height: 20px;
		color: #000;
		text-align: center;
		span {
			font-weight: 700;
		}
	}
`;
