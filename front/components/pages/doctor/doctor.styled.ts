import styled from "styled-components";

export const DoctorContainer = styled.div`
	.go-back {
		margin: 10px 0 16px 0;
	}

	h3 {
		font-size: 32px;
		line-height: 40px;
		font-weight: 500;
		margin-bottom: 16px;
	}

	.first-line {
		display: flex;
		gap: 24px;
		margin-bottom: 24px;
		max-height: 360px;

		.about {
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
			border-radius: 32px;
			padding: 32px;
			width: 52%;

			p {
				font-size: 18px;
				line-height: 24px;
				color: #1f2124;
			}
		}

		.treatment {
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
			border-radius: 32px;
			padding: 32px;
			width: 25%;

			ul {
				list-style: disc;
				max-height: 190px;
				overflow-y: scroll;
				padding-right: 10px;
				margin-left: 10px;

				&::-webkit-scrollbar {
					width: 4px;
				}

				&::-webkit-scrollbar-thumb {
					background: #d2d3d3;
				}

				scrollbarwidth: thin;
				scrollbarcolor: #d2d3d3 #fff;

				li {
					color: #1f2124;
					font-size: 18px;
					line-height: 24px;
					margin-bottom: 8px;
					margin-left: 20px;
				}
			}
		}

		.associations {
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
			border-radius: 32px;
			padding: 32px;
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			overflow-y: hidden;

			&::-webkit-scrollbar {
				width: 4px;
			}

			&::-webkit-scrollbar-thumb {
				background: #d2d3d3;
			}

			scrollbarwidth: thin;
			scrollbarcolor: #d2d3d3 #fff;

			img {
				display: block;
				max-width: 124px;
				margin-bottom: 24px;
			}

			p {
				font-size: 18px;
				line-height: 24px;
				text-align: center;
				color: #1f2124;
			}

			.associations-list {
				overflow-y: scroll;

				scrollbarwidth: thin;
				scrollbarcolor: #d2d3d3 #fff;

				&::-webkit-scrollbar {
					width: 4px;
				}

				&::-webkit-scrollbar-thumb {
					background: #d2d3d3;
				}
			}
		}
	}

	.second-line {
		display: flex;
		gap: 24px;
		margin-bottom: 40px;

		.left {
			width: 50%;
			display: flex;
			flex-direction: column;
			gap: 24px;

			.education {
				background: #ffffff;
				box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
				border-radius: 32px;
				padding: 32px;

				p {
					font-size: 18px;
					line-height: 24px;
					color: #1f2124;
				}
			}

			.license {
				background: #ffffff;
				box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
				border-radius: 32px;
				padding: 32px;
				flex: 1 0 auto;

				div {
					margin-bottom: 16px;
				}

				.header {
					font-size: 18px;
					line-height: 24px;
					color: #1f2124;
					margin-bottom: 6px;
				}

				.description {
					font-size: 16px;
					line-height: 20px;
					color: #8f9092;
					margin-bottom: 16px;
				}
			}
		}

		.right {
			width: 50%;
			background: #ffffff;
			box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
			border-radius: 32px;
			padding: 32px;

			.description {
				font-size: 16px;
				font-weight: 400;
				line-height: 20px;
				color: #8f9092;
				max-width: 415px;
				margin-bottom: 24px;
			}

			.unsurance-list {
				list-style: disc;
				max-height: 776px;
				overflow-y: scroll;
				padding-right: 10px;
				margin-left: 10px;

				&::-webkit-scrollbar {
					width: 4px;
				}

				&::-webkit-scrollbar-thumb {
					background: #d2d3d3;
				}

				scrollbarwidth: thin;
				scrollbarcolor: #d2d3d3 #fff;

				li {
					color: #1f2124;
					font-size: 18px;
					line-height: 24px;
					margin-bottom: 8px;
					margin-left: 20px;
				}
			}
		}
	}

	.reviews-line {
		margin-bottom: 40px;

		.reviews-description {
			font-size: 18px;
			line-height: 24px;
			max-width: 570px;
			margin-bottom: 32px;
		}

		.reviews-list {
			display: flex;
			gap: 24px;
		}
	}
`;
