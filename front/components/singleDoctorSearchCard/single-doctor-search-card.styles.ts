import styled from "styled-components";

export const SingleDoctorContainer = styled.div`
	min-height: 320px;
	padding: 24px;
	background-color: #fff;
	box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
	border-radius: 32px;
	margin-bottom: 24px;
	display: flex;
	justify-content: space-between;

	.content-block {
		.head-data {
			display: flex;
			gap: 16px;

			.doctor-logo {
				img {
					display: block;
					max-width: 190px;
					height: auto;
					border-radius: 24px;
				}

				&.single-logo {
					position: absolute;

					img {
						max-width: 272px;
					}
				}
			}

			&.single-data {
				gap: 0px;
			}

			&.pointer {
				cursor: pointer;
			}
		}

		.doctor-main-data {
			margin-bottom: 16px;

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

			&.single-main-data {
				padding-left: 296px;
			}
		}

		.additional-data {
			.clinic-address {
				font-size: 18px;
				line-height: 24px;
				color: #1f2124;
				position: relative;
				padding-left: 35px;
				margin-bottom: 4px;

				&:before {
					position: absolute;
					content: url(/images/icons/pick-icon.svg);
					top: 0;
					left: 0;
				}
			}

			.clinic-name {
				padding-left: 35px;
				font-size: 16px;
				line-height: 20px;
				color: #626466;
			}

			&.single-additional-data {
				padding-left: 296px;
			}
		}
	}

	.buttons-block {
		max-width: 276px;

		button {
			margin-bottom: 10px;
			max-height: 48px;
		}
	}
`;
