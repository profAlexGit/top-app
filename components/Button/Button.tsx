import styles from './Button.module.scss';
import cn from 'classnames';

import {IButtonProps} from './Button.props';

import ArrowIcon from './arrow.svg';

const Button: React.FC<IButtonProps> = ({
	appearance,
	children,
	className,
	arrow = 'none',
	...props
}): JSX.Element => {
	const classes = cn(styles.button, className, {
		[styles.primary]: appearance === 'primary',
		[styles.outline]: appearance === 'outline',
	});

	const arrowClasses = cn(styles.arrow, {
		[styles.rightArrow]: arrow === 'right',
		[styles.downArrow]: arrow === 'down',
	});

	return (
		<button className={classes} {...props}>
			{children}
			{arrow !== 'none' && (
				<span className={arrowClasses}>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};

export {Button};
