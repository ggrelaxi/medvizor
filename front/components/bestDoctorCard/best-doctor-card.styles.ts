import styled from "styled-components";

export const BestDoctorCardContainer = styled.div`
	padding: 24px;
	background-color: #fff;
	box-shadow: 0px 14px 24px -2px rgb(31 33 36 / 10%);
	border-radius: 32px;
	margin-bottom: 24px;
	display: flex;
	justify-content: space-between;

	.content-block {
		display: flex;
		gap: 16px;

		h2 {
			cursor: pointer;
		}

		.doctor-logo {
			img {
				display: block;
				max-width: 190px;
				border-radius: 24px;
			}
		}

		.doctor-description {
			font-size: 18px;
			line-height: 24px;
			color: #626466;
			margin-bottom: 16px;
		}

		.doctor-language {
			position: relative;
			padding-left: 35px;
			position: relative;
			margin-bottom: 12px;
			font-size: 18px;
			line-height: 24px;

			&:before {
				position: absolute;
				content: url(/images/icons/language-icon.svg);
				top: 0;
				left: 0;
			}
		}

		.doctor-practice {
			position: relative;
			padding-left: 35px;
			position: relative;
			margin-bottom: 12px;
			font-size: 18px;
			line-height: 24px;

			&:before {
				position: absolute;
				content: url(/images/icons/practice-icon.svg);
				top: 0;
				left: 0;
			}
		}

		.doctor-price {
			position: relative;
			padding-left: 35px;
			position: relative;
			margin-bottom: 12px;
			font-size: 18px;
			line-height: 24px;

			&:before {
				position: absolute;
				content: url(/images/icons/price-icon.svg);
				top: 0;
				left: 0;
			}
		}
	}
`;
