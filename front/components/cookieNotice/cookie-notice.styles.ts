import styled from "styled-components";

export const CookieNoticeContainer = styled.div`
	position: fixed;
	background: rgba(31, 33, 36, 0.6);
	-webkit-backdrop-filter: blur(4px);
	backdrop-filter: blur(4px);
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: end;
	z-index: 100;

	.form-container {
		background: #fff;
		display: flex;
		width: 100vw;
		display: flex;
		align-items: center;
		padding: 50px;
		gap: 100px;
		justify-content: center;
		font-size: 24px;
		line-height: 32px;
		color: #1f2124;

		.privacy-link {
			color: #e84a22;
		}
	}
`;
