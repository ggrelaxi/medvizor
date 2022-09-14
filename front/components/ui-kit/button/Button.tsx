import { ButtonContainer } from "./button.styles";

type buttonType = "gray" | "orange" | "opacity" | "black" | "phone";

type buttonSize = "s" | "m" | "l" | "xl";

type icons = "phone" | "chat";

interface IButton {
	text: string;
	type: buttonType;
	size: buttonSize;
	padding?: string;
	width?: string;
	onClick: () => void;
	disabled?: boolean;
	icon?: icons;
}

const getSize = (size: buttonSize) => {
	switch (size) {
		case "s":
			return "s";
		case "m":
			return "m";
		case "l":
			return "l";
		default:
			return "l";
	}
};

const getType = (type: buttonType) => {
	switch (type) {
		case "gray":
			return "gray";
		case "orange":
			return "orange";
		case "opacity":
			return "opacity";
		case "black":
			return "black";
		case "phone":
			return "phone";
		default:
			return "orange";
	}
};

export const Button = (props: IButton) => {
	const {
		text,
		size,
		type,
		onClick,
		disabled,
		padding = "",
		width = "",
		icon,
	} = props;

	const classNames = `${getSize(size)} ${getType(type)}`;

	return (
		<ButtonContainer padding={padding} width={width}>
			<button
				className={classNames}
				onClick={onClick}
				disabled={disabled}
			>
				{icon === "phone" && (
					<svg
						width="16"
						height="22"
						viewBox="0 0 16 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.31148 1.53458L7.28061 5.1413C7.58837 5.64749 7.40369 6.34359 6.91139 6.65988L6.23443 7.03953C5.0037 7.79884 5.12676 8.68469 5.68052 9.69708L8.20356 14.1265C8.75746 15.1389 9.49587 15.7717 10.7266 15.0124L11.4036 14.6327C11.8958 14.3162 12.5728 14.5061 12.8804 15.0124L14.8495 18.6191C15.1573 19.1253 14.9726 19.8214 14.4803 20.0745C12.6343 21.2134 10.6033 21.4665 8.57278 19.8846C6.1728 18.0495 1.43462 9.5071 1.0654 6.53308C0.696176 3.93875 1.9269 2.23008 3.8346 1.1547C4.32688 0.838256 5.00385 1.02815 5.31145 1.53436L5.31148 1.53458Z"
							stroke="#1F2124"
							strokeWidth="0.8"
						/>
					</svg>
				)}
				{icon === "chat" && (
					<svg
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M4.90049 4C3.575 4 2.50049 5.07452 2.50049 6.4V15.9515C2.50049 17.277 3.575 18.3515 4.90049 18.3515H8.23356V18.3518H9.67046L13.287 21.8863C13.3751 21.9724 13.4979 22.0131 13.62 21.9967C13.742 21.9802 13.8497 21.9085 13.9119 21.8021L15.9293 18.3518H16.7664V18.3515H20.0993C21.4248 18.3515 22.4993 17.277 22.4993 15.9515V6.4C22.4993 5.07452 21.4248 4 20.0993 4H4.90049ZM15.6997 17.5518V17.5515H20.0993C20.983 17.5515 21.6993 16.8352 21.6993 15.9515V6.4C21.6993 5.51635 20.983 4.8 20.0993 4.8H4.90049C4.01683 4.8 3.30049 5.51635 3.30049 6.4V15.9515C3.30049 16.8352 4.01683 17.5515 4.90049 17.5515H9.8334V17.5518H9.83347C9.93796 17.5518 10.0383 17.5927 10.113 17.6657L13.4798 20.9561L15.3545 17.7499C15.4262 17.6272 15.5576 17.5518 15.6997 17.5518ZM6.50006 8.6C6.50006 8.37909 6.67915 8.2 6.90006 8.2H16.1001C16.321 8.2 16.5001 8.37909 16.5001 8.6C16.5001 8.82091 16.321 9 16.1001 9H6.90006C6.67915 9 6.50006 8.82091 6.50006 8.6ZM6.90006 11.2C6.67915 11.2 6.50006 11.3791 6.50006 11.6C6.50006 11.8209 6.67915 12 6.90006 12H12.1001C12.321 12 12.5001 11.8209 12.5001 11.6C12.5001 11.3791 12.321 11.2 12.1001 11.2H6.90006Z"
							stroke="#1F2124"
							strokeWidth="0.6"
						/>
					</svg>
				)}
				{text}
			</button>
		</ButtonContainer>
	);
};
