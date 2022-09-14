import { FooterContainer } from "./footer.styles";

export const Footer = (props: any) => {
	return (
		<FooterContainer>
			<span>If something went wrong or you have </span>
			<span>
				any questions, please <a href="mailto:ya@ya.ru">email us</a>
			</span>
		</FooterContainer>
	);
};
