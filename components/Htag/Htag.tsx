import {IHtagProps} from './Htag.props';
import cn from 'classnames';

import styles from './Htag.module.scss';

const Htag: React.FC<IHtagProps> = ({tag, children, className, ...props}): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (
				<h1 className={cn(styles.h1, className)} {...props}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={cn(styles.h2, className)} {...props}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={cn(styles.h3, className)} {...props}>
					{children}
				</h3>
			);
		default:
			return <></>;
	}
};

export {Htag};
