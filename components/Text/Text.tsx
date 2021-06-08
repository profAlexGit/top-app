import {ITextProps} from './Text.props';
import cn from 'classnames';

import styles from './Text.module.scss';

const Text: React.FC<ITextProps> = ({size = 'm', children, className, ...props}): JSX.Element => {
	const textClasses = cn(className, styles.text, {
		[styles.small]: size === 's',
		[styles.medium]: size === 'm',
		[styles.large]: size === 'lg',
	});
	return (
		<p className={textClasses} {...props}>
			{children}
		</p>
	);
};

export {Text};
