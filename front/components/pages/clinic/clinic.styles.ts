import styled from "styled-components";

export const ClinicContainer = styled.div`
	.go-back {
		margin: 10px 0 16px 0;
	}

	.clinic-additional-info {
		display: flex;
		gap: 24px;
		margin-bottom: 68px;

		.treatment,
		.insurance {
			width: 50%;
			background-color: #fff;
			padding: 32px;
			box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
			border-radius: 32px;
			max-height: 500px;

			h3 {
				margin-bottom: 16px;
			}

			.insurance-description {
				font-size: 16px;
				line-height: 20px;
				color: #626466;
				margin-bottom: 8px;
			}

			ul {
				list-style: disc;
				max-height: 330px;
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

	.doctors-header {
		h3 {
			margin-bottom: 16px;
		}
	}
`;
