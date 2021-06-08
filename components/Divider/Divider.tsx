import {IDividerProps} from './Divider.props';
import styles from './Divider.module.scss';
import cn from 'classnames';

const Divider: React.FC<IDividerProps> = ({className, ...props}): JSX.Element => {
	return <hr className={cn(className, styles.hr)} {...props} />;
};

export {Divider};
