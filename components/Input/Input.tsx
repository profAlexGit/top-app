import styles from './Input.module.scss';
import {IInputProps} from './Input.props';
import cn from 'classnames';

const Input: React.FC<IInputProps> = ({className, ...props}): JSX.Element => {
	return <input className={cn(className, styles.input)} {...props}></input>;
};

export {Input};
