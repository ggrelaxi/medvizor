import { RecommenderBlockContainer } from "./recommended-block.styles";
import Router from "next/router";
import { Button } from "../ui-kit/button";
import { useTranslation } from "next-i18next";

interface IProps {
	text: string;
}

export const RecommendedBlock = (props: IProps) => {
	const { text } = props;
	const {
		t,
		i18n: { language },
	} = useTranslation();

	const goToSingInHandler = () => {
		Router.push({ pathname: "/registration" });
	};
	return (
		<RecommenderBlockContainer>
			<h3>{text}</h3>
			<Button
				text={t("common.signUp")}
				size="m"
				type="orange"
				onClick={goToSingInHandler}
			/>
		</RecommenderBlockContainer>
	);
};
