import styled from "styled-components";

export const DoctorAppointmentContainer = styled.div`
	input,
	textarea {
		background: unset;
	}

	.go-back {
		margin-bottom: 16px;
	}
	.doctor-card {
		background: rgba(255, 255, 255, 0.4);
		box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
		border-radius: 32px;
		display: flex;
		padding: 24px;
		gap: 24px;
		margin-bottom: 24px;

		.left {
			img {
				max-width: 144px;
				border-radius: 24px;
			}
		}

		.right {
			.deseases {
				font-size: 18px;
				line-height: 24px;
				color: #626466;
				margin-bottom: 24px;
			}

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
		}
	}

	.appointments-container {
		display: flex;
		gap: 24px;

		& div[class*="ButtonContainer"] {
			width: 100%;
			margin-bottom: 10px;
			button {
				width: 100% !important;
			}
		}

		.online-card {
			padding: 32px;
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
			border-radius: 32px;
			width: 33.3%;
			height: fit-content;

			h3 {
				font-weight: 500;
				margin-bottom: 16px;
			}

			.available-date {
				font-size: 18px;
				line-height: 24px;
				margin-bottom: 24px;

				span {
					color: #e84a22;
				}
			}

			.fio-container {
				margin-bottom: 16px;

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
				}
			}

			.phone-container {
				margin-bottom: 32px;

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
				}
			}

			.online-type-container {
				margin-bottom: 16px;

				.online-type-label {
					font-size: 16px;
					line-height: 20px;
					color: #626466;
					display: block;
					margin-bottom: 8px;
				}

				.online-type-block {
					border: 1px solid #1f2124;
					border-radius: 10px;
					display: flex;

					.online-type-item {
						position: relative;
						width: 33.3%;
						text-align: center;
						padding: 9px 16px;
						font-size: 18px;
						line-height: 24px;
						color: #1f2124;
						cursor: pointer;

						&:after {
							position: absolute;
							top: 50%;
							left: 0px;
							width: 1px;
							height: 18px;
							transform: translateY(-50%);
							background: #1f2124;
							content: "";
						}
					}
					.online-type-item:nth-child(3) {
						border: none;
					}
					.online-type-item.active {
						background: #1f2124;
						border-radius: 10px;
						color: #fff;
					}
					.online-type-item {
						&:nth-child(1) {
							&:after {
								display: none;
							}
						}
					}
				}
			}

			.online-date-visit-container {
				.online-date-visit-label {
					font-size: 16px;
					line-height: 20px;
					color: #626466;
					display: block;
					margin-bottom: 8px;
				}

				.online-date-calendar-container {
					width: 60%;
					margin-bottom: 24px;

					.react-datepicker-wrapper {
						position: relative;

						&:after {
							position: absolute;
							content: url("/images/icons/date-icon.svg");
							width: 16px;
							height: 16px;
							top: 50%;
							transform: translateY(-50%);
							right: 15px;
						}
						input {
							border-radius: 10px;
							border-width: 1px;
							padding: 8px 14px;
							font-size: 16px;
							line-height: 20px;
							cursor: pointer;
							width: 100%;

							&:focus,
							&:active {
								outline: none;
							}
						}
					}

					.react-datepicker {
						box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
						border-radius: 10px;
						border: none;
					}

					.react-datepicker-popper {
						z-index: 11;
					}

					.react-datepicker__day-names {
						display: none;
					}

					.react-datepicker__header {
						border: none;
						color: #1f2124;
						font-size: 16px;
						line-height: 20px;
						font-weight: 400;
						background: #fff;
					}

					.react-datepicker__current-month {
						font-weight: 400;
						font-size: 16px;
						line-height: 20px;
					}

					.react-datepicker__navigation--next {
						right: 20px;

						span:before {
							border-color: #1f2124;
						}
					}

					.react-datepicker__navigation--previous {
						left: 20px;

						span:before {
							border-color: #1f2124;
						}
					}

					.react-datepicker__day {
						border-radius: 50%;
					}

					.react-datepicker__day--keyboard-selected,
					.react-datepicker__day--selected {
						background-color: #eef4f5;
						color: #1f2124;
					}
				}
			}

			.online-date-visit-time-container {
				display: flex;
				gap: 12px;
				flex-wrap: wrap;
				margin-bottom: 40px;

				.time-item {
					margin-bottom: 12px;
					border: 1px solid #1f2124;
					border-radius: 10px;
					padding: 6px 14px;
					color: #1f2124;
					font-size: 18px;
					line-height: 24px;
					cursor: pointer;
				}

				.time-item.active {
					background: #1f2124;
					color: #fff;
				}
			}

			.online-bottom-description {
				font-size: 16px;
				line-height: 20px;
				color: #626466;
				display: block;
				margin-bottom: 8px;
			}
		}
		.urgent-card {
			padding: 32px;
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgb(31 33 36 / 10%);
			border-radius: 32px;
			width: 33.3%;
			height: fit-content;

			h3 {
				font-weight: 500;
				margin-bottom: 16px;
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
			}

			.urgent-description {
				font-size: 18px;
				line-height: 24px;
				margin-bottom: 24px;
			}

			.fio-container {
				margin-bottom: 16px;
			}

			.phone-container {
				margin-bottom: 32px;
			}

			.urgent-date-container {
				margin-bottom: 16px;

				.urgent-date-block {
					display: flex;
					gap: 12px;

					.urgent-date-item {
						border: 1px solid #1f2124;
						border-radius: 10px;
						padding: 6px 10px;
						font-size: 18px;
						line-height: 24px;
						color: #1f2124;
						display: flex;
						white-space: nowrap;
						flex: 1 0 auto;
						cursor: pointer;
					}

					.urgent-date-item.active {
						background: #1f2124;
						color: #fff;
					}
				}
			}

			.urgent-question-container {
				margin-bottom: 40px;

				textarea {
					padding: 12px 16px;
					font-size: 18px;
					line-height: 24px;
					color: #1f2124;
					border-radius: 12px;
					border: 1px solid #1f2124;
					width: 100%;
				}
			}
		}
		.ask-card {
			padding: 32px;
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgb(31 33 36 / 10%);
			border-radius: 32px;
			width: 33.3%;
			height: fit-content;

			h3 {
				font-weight: 500;
				margin-bottom: 16px;
			}

			.ask-fio-container {
				margin-bottom: 16px;
			}

			.ask-phone-container {
				margin-bottom: 32px;
			}

			.ask-question-container {
				margin-bottom: 40px;
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
			}

			textarea {
				padding: 12px 16px;
				font-size: 18px;
				line-height: 24px;
				color: #1f2124;
				border-radius: 12px;
				border: 1px solid #1f2124;
				width: 100%;
			}
		}

		.online-card,
		.urgent-card,
		.ask-card {
			background: rgba(255, 255, 255, 0.4);
		}

		.online-card.active,
		.urgent-card.active,
		.ask-card.active {
			background: #fff;
		}
	}
`;
