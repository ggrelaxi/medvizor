import styled from "styled-components";

export const TariffsContainer = styled.div`
	margin-top: 56px;

	.top-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 90px;

		.plan-picker {
			display: flex;
			max-width: 438px;
			width: 100%;
			background: #fff;
			border-radius: 12px;
			font-size: 18px;
			line-height: 24px;
			color: #1f2124;

			.annually {
				cursor: pointer;
				max-width: 254px;
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding: 10px 24px;
				align-items: center;

				span {
					display: inline-block;
					padding: 4px 14px;
					background: #e84a22;
					color: #fff;
					border-radius: 12px;
				}
			}

			.monthly {
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				max-width: 184px;
				width: 100%;
			}

			.active {
				background: #e84a22;
				border-radius: 12px;
				color: #fff;

				span {
					background: #fff;
					color: #e84a22;
				}
			}
		}
	}

	.tariffs {
		display: flex;
		gap: 24px;
		align-items: end;
		margin-bottom: 90px;

		.tariff-card {
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
			border-radius: 32px;
			max-width: 33%;
			width: 100%;
			padding: 32px;
			height: 592px;
			display: flex;
			flex-direction: column;

			.marker {
				position: absolute;
				right: -6px;
				top: -6px;
				padding: 4px 14px;
				color: #fff;
				background: #e84a22;
				border-radius: 12px;
				backdrop-filter: blur(3px);
				font-size: 16px;
				line-height: 20px;
			}

			&:nth-child(2) {
				margin-bottom: 32px;
				position: relative;
			}

			& div[class*="ButtonContainer"] {
				width: 100%;

				button {
					width: 100%;
				}
			}

			h3 {
				margin-bottom: 20px;
			}

			ul {
				list-style: disc;
				padding-left: 20px;
			}

			ul li {
				font-size: 18px;
				line-height: 24px;
				color: #000000;
				margin-bottom: 16px;
			}
		}

		.price {
			text-align: center;
			margin-bottom: 24px;
			text-align: center;
			margin-bottom: 24px;
			display: flex;
			flex: 1 0 auto;
			flex-direction: column;
			justify-content: flex-end;

			.main {
				font-size: 18px;
				line-height: 24px;
				color: #626466;
				margin-bottom: 4px;

				span {
					font-size: 32px;
					line-height: 40px;
					color: #1f2124;
					font-weight: 500;
				}
			}

			.second {
				font-size: 16px;
				line-height: 20px;
				color: #626466;
			}
		}
	}

	.separator {
		text-align: center;
		color: #1f2124;
		font-size: 24px;
		line-height: 32px;
		margin-bottom: 80px;
	}

	.request {
		text-align: center;
		font-size: 32px;
		line-height: 40px;
		color: #1f2124;
		h2 {
			text-align: center;
			margin-bottom: 80px;
		}

		p {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			line-height: 60px;
		}

		.request-picker-container {
			margin-bottom: 130px;
			text-align: left;
		}

		.request-icon {
			margin: 0 10px;
		}

		.phone-input {
			margin: 0 10px;
			background: none;
			border: none;
			color: #e84a22;
			max-width: 250px;

			&:focus,
			&:active {
				outline: none;
			}
			&::placeholder {
				color: #e84a22;
				text-align: center;
			}
		}

		button {
			margin-bottom: 130px;
		}
	}
`;
