import styled from "styled-components";

export const ButtonContainer = styled("div")<{
	padding: string;
	width: string;
}>`
	display: inline-block;

	button {
		background: none;
		border: none;
		font-family: PT, sans-serif;
		cursor: pointer;
		transition: all 0.2s ease-in;
		width: ${(props: any) =>
			props.width ? `${props.width}px !important` : "unset"};
		padding: ${(props: any) =>
			props.padding ? `${props.padding} !important` : "unset"};
	}

	button:disabled {
		opacity: 0.1;
		pointer-events: none;
	}

	.l {
		padding: 20px 200px;
		border-radius: 24px;
		font-size: 32px;
		line-height: 40px;
		font-weight: 500;
	}

	.m {
		padding: 16px 130px;
		border-radius: 16px;
		font-size: 24px;
		line-height: 32px;
		font-weight: 400;
	}

	.s {
		padding: 12px 41px;
		border-radius: 12px;
		font-size: 18px;
		line-height: 24px;
		font-weight: 400;
	}

	.gray {
		background: #1f2124;
		opacity: 0.6;
		color: #fff;

		&:hover {
			opacity: 1;
		}
		&:active {
			background: #e84a22;
		}
	}

	.orange {
		background: #e84a22;
		opacity: 0.6;
		color: #fff;

		&:hover {
			opacity: 1;
		}
		&:active {
			opacity: 1;
			background: #1f2124;
		}
	}

	.opacity {
		opacity: 0.6;
		border: 1px solid #e84a22;
		color: #e84a22;

		&:hover {
			opacity: 1;
		}
		&:active {
			background: #e84a22;
			color: #fff;
		}
	}

	.black {
		background-color: #1f2124;
		color: #ffffff;

		&:hover {
			opacity: 0.6;
		}
		&:active {
			background: #e84a22;
			color: #fff;
		}
	}

	.phone {
		opacity: 0.6;
		border: 1px solid #1f2124;
		color: #1f2124;
		display: flex;
		align-items: center;
		gap: 17px;
		justify-content: center;

		&:hover {
			opacity: 1;
		}
		&:active {
			color: #e84a22;
			border-color: #e84a22;

			svg {
				path {
					stroke: red;
				}
			}
		}
	}
`;
