import {useEffect, useState, KeyboardEvent} from 'react';
import styles from './Rating.module.scss';
import {IRatingProps} from './Rating.props';
import StarIcon from './star.svg';
import cn from 'classnames';

const Rating: React.FC<IRatingProps> = ({
	rating,
	setRating,
	isEditable = false,
	...props
}): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const changeDisplay = (i: number) => (): void => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClickStarHandler = (rating: number) => (): void => {
		setRating && setRating(rating);
	};

	const keyPressHadler = (i: number) => (e: KeyboardEvent<SVGElement>) => {
		if (!isEditable || e.code !== 'Space') {
			return;
		}
		setRating && setRating(i);
	};

	const constructRating = (currentRating: number): void => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable,
					})}
					onMouseEnter={changeDisplay(i + 1)}
					onMouseLeave={changeDisplay(rating)}
					onClick={onClickStarHandler(i + 1)}
				>
					<StarIcon tabIndex={isEditable ? 0 : -1} onKeyDown={keyPressHadler(i + 1)} />
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	return (
		<div {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => {
				return (
					<span key={i} className={styles.star_wrapper}>
						{r}
					</span>
				);
			})}
		</div>
	);
};

export {Rating};
