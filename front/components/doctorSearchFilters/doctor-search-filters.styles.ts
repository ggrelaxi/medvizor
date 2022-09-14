import styled from "styled-components";

export const DoctorsFiltersContainer = styled.div`
	background: #ffffff;
	box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
	border-radius: 24px;
	padding: 24px;

	.first-line {
		display: flex;
		align-items: left;
		margin-bottom: 16px;

		.place-block {
			max-width: 406px;
			border: 1px solid #1f2124;
			border-radius: 12px;
			padding: 12px 24px;
			width: 100%;
			color: #1f2124;
			font-size: 18px;
			line-height: 24px;
			margin-right: 12px;
		}

		.speciality-block {
			width: 100%;
			max-width: 406px;
			margin-right: 24px;
		}
	}

	.second-line {
		display: flex;
		gap: 12px;
		margin-bottom: 40px;

		.price-range {
			max-width: 208px;
			width: 100%;
			border: 1px solid #1f2124;
			border-radius: 10px;
			display: flex;
			padding: 6px 14px;
			position: relative;

			&:after {
				position: absolute;
				content: url("/images/icons/dollar-icon.svg");
				width: 10px;
				height: 15px;
				top: 50%;
				transform: translateY(-50%);
				right: 15px;
			}

			input {
				max-width: 80px;
				border: none;
				text-align: center;

				&:placeholder {
					font-size: 16px;
					line-height: 20px;
					color: #8f9092;
				}

				&:active,
				&:focus {
					border: none;
					outline: none;
				}
			}

			div {
				display: block;
				width: 16px;
				height: 20px;
				position: relative;
				margin: 0 5px;

				&:after {
					position: absolute;
					content: "";
					width: 100%;
					height: 1px;
					background: #1f2124;
					left: 0;
					top: 50%;
				}
			}
		}

		.visit-date {
			max-width: 152px;
			width: 100%;

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
					padding: 6px 14px;
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

		.type-of-visit {
			max-width: 147px;
			width: 100%;
		}

		.language {
			max-width: 131px;
			width: 100%;
		}

		.booking-type {
			max-width: 137px;
			width: 100%;
			padding: 6px 14px;
			border-radius: 10px;
			border: 1px solid #1f2124;
			font-size: 15px;
			line-height: 20px;
			text-align: center;
			color: #8f9092;
			cursor: pointer;

			&.is-active {
				background-color: #e84a22;
				color: #fff;
				border-color: #e84a22;
			}
		}

		.more-filters {
			margin-left: 12px;
			text-transform: uppercase;
			display: flex;
			align-items: center;
			cursor: pointer;

			svg {
				margin-left: 10px;
				margin-bottom: 4px;
			}
		}
	}

	.additional-filter-container {
		position: absolute;
		background: #ffffff;
		box-shadow: 0px 14px 10px -2px rgb(31 33 36 / 10%);
		border-radius: 0 0 24px 24px;
		padding: 24px;
		width: 100%;
		left: 0;
		z-index: 10;
	}

	.third-line,
	.fouth-line,
	.fifth-line {
		display: flex;
		align-items: center;
		margin-bottom: 32px;
		font-size: 18px;
		line-height: 24px;
		color: #626466;

		.additional-description {
			max-width: 200px;
			width: 100%;
			color: #626466;
			font-size: 18px;
			line-height: 24px;
		}

		.addition-filter-container {
			max-width: 260px;
			width: 100%;

			div[class*="container"] {
				max-width: unset;
			}

			div[class*="control"] {
				max-width: 260px;
			}
		}

		.buttons-filter {
			display: flex;
			gap: 14px;
		}

		.yes-button,
		.no-button {
			border: 1px solid #1f2124;
			border-radius: 10px;
			padding: 6px 14px;
			max-width: 54px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			&.is-active {
				background-color: #e84a22;
				color: #fff;
				border-color: #e84a22;
			}
		}
	}
`;
