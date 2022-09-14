import { TabHeadContainer } from "./tab-head.styles";

interface ITabHead {
	title: string;
	className?: string;
	onClick: () => void;
}

export const TabHead = ({ title, onClick, className = "" }: ITabHead) => (
	<TabHeadContainer className={className} onClick={onClick}>{title}</TabHeadContainer>
);
