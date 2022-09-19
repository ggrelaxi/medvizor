import styled from "styled-components";

export const ClinicCardListContainer = styled.div`
	padding: 24px;
	background-color: #fff;
	box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
	border-radius: 32px;
	display: flex;
	gap: 100px;
	justify-content: space-between;
	margin-bottom: 24px;

	.content-block {
		width: 100%;

		.head-data {
			display: flex;
			gap: 16px;
			margin-bottom: 20px;

			.clinic-logo {
				max-width: 112px;

				img {
					display: block;
					width: 100%;
				}
			}

			.clinic-main-data {
				p {
					font-size: 18px;
					line-height: 24px;
					color: #626466;
				}
			}

			&.pointer {
				cursor: pointer;
			}
		}
	}

	.auth-notice-block {
		background: #e84a22;
		color: #fff;
		font-size: 16px;
		line-height: 20px;
		padding: 12px 18px;
		border-radius: 12px;
		display: inline-block;

		span {
			font-size: 24px;
			line-height: 32px;
			font-weight: 500;
		}
	}

	.buttons-block {
		max-width: 276px;

		button {
			margin-bottom: 10px;
			max-height: 48px;
		}

		button.phone {
			opacity: 1;

			&:hover {
				opacity: 0.6;
			}
		}

		.button-additional-text {
			padding-left: 26px;
			position: relative;
			font-size: 16px;
			line-height: 20px;
			color: #8f9092;

			&:before {
				position: absolute;
				top: 0;
				left: 0;
				content: url("/images/icons/info-icon.svg");
			}
		}
	}
`;

export const AdditionData = styled("div")<{
	isNoticeCard: boolean;
}>`
	font-size: 18px;
	line-height: 24px;
	color: #1f2124;
	display: flex;
	margin-bottom: ${(props: any) => (props.isNoticeCard ? "32px" : "0px")};

	.right {
		width: 35%;
	}
	.left {
		width: 65%;
	}

	.address {
		padding-left: 35px;
		position: relative;
		margin-bottom: 12px;

		&:before {
			position: absolute;
			content: url("/images/icons/pick-icon.svg");
			top: 0;
			left: 0;
		}
	}

	.work-time {
		p {
			padding-left: 35px;
			position: relative;
			margin-bottom: 12px;
			color: #1f2124;

			span {
				display: inline-block;
				width: 190px;
				color: #626466;
			}
		}

		p:first-child:before {
			position: absolute;
			content: url("/images/icons/time-icon.svg");
			top: 0;
			left: 0;
		}
	}

	.language {
		padding-left: 35px;
		position: relative;
		margin-bottom: 12px;

		&:before {
			position: absolute;
			content: url("/images/icons/language-icon.svg");
			top: 0;
			left: 0;
		}
	}

	.payment {
		padding-left: 35px;
		position: relative;

		&:before {
			position: absolute;
			content: url("/images/icons/payment-icon.svg");
			top: 0;
			left: 0;
		}
	}
`;
