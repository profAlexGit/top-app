import styles from './Card.module.scss';
import {ICardProps} from './Card.props';
import cn from 'classnames';

const Card: React.FC<ICardProps> = ({
	color = 'white',
	children,
	className,
	...props
}): JSX.Element => {
	const cardClasses = cn(className, styles.card, {
		[styles.white]: color === 'white',
		[styles.blue]: color === 'blue',
	});
	return (
		<div className={cardClasses} {...props}>
			{children}
		</div>
	);
};

export {Card};
