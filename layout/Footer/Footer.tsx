import styles from './Footer.module.scss';
import {IFooterProps} from './Footer.props';
import cn from 'classnames';
import {format} from 'date-fns';

const Footer: React.FC<IFooterProps> = ({className, ...props}): JSX.Element => {
	const classes = cn(className, styles.footer);

	return (
		<footer className={classes} {...props}>
			{/* <div className={styles.left}></div> */}
			<span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>

			{/* <div className={styles.right}></div> */}
		</footer>
	);
};

export {Footer};
