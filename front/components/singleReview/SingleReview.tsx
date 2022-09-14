import { ReviewContainer } from "./single-review.styles";

export const SingleReview = (props: any) => {
	const { name, tone, review } = props;
	return (
		<ReviewContainer>
			<div className="name">
				{tone === "Neutral" && (
					<img
						src="/images/icons/neutral-icon.svg"
						alt="neutral review"
					/>
				)}
				{tone === "Positive" && (
					<img
						src="/images/icons/positive-icon.svg"
						alt="positive review"
					/>
				)}
				<span>{name}</span>
			</div>
			<div className="review">{review}</div>
		</ReviewContainer>
	);
};
