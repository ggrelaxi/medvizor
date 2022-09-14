import styled from "styled-components";

export const ClinicSearchFiltersContainer = styled.div`
	background: #ffffff;
	box-shadow: 0px 14px 24px -2px rgba(31, 33, 36, 0.1);
	border-radius: 24px;
	padding: 24px;
	display: flex;
	gap: 24px;

	.filters {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 12px;

		& > div {
			width: 33.3%;
		}

		.place-picker {
			border: 1px solid #1f2124;
			border-radius: 12px;
			padding: 12px 24px;
			font-size: 18px;
			line-height: 24px;
			font-weight: 400;
			color: #1f2124;
		}
	}
`;
