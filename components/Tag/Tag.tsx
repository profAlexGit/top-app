import styles from './Tag.module.scss';
import {ITagProps} from './Tag.props';
import cn from 'classnames';

const Tag: React.FC<ITagProps> = ({
	size = 'm',
	color = 'none',
	href,
	className,
	children,
	...props
}): JSX.Element => {
	const classes = cn(styles.tag, className, {
		[styles.s]: size === 's',
		[styles.m]: size === 'm',
		[styles.red]: color === 'red',
		[styles.grey]: color === 'grey',
		[styles.green]: color === 'green',
		[styles.primary]: color === 'primary',
	});

	return (
		<div className={classes} {...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export {Tag};
