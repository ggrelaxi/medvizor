import { LoaderContainer } from "./loader.styles";

export const Loader = () => {
	return (
		<LoaderContainer>
			<div className="lds-dual-ring"></div>
		</LoaderContainer>
	);
};
