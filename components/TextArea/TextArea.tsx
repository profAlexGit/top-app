import styles from './TextArea.module.scss';
import {ITextAreaProps} from './TextArea.props';
import cn from 'classnames';

const TextArea: React.FC<ITextAreaProps> = ({className, resize = false, ...props}): JSX.Element => {
	return (
		<textarea
			className={cn(className, styles.textarea, {
				[styles.resize]: resize,
			})}
			{...props}
		/>
	);
};

export {TextArea};
