import styles from './Header.module.scss';
import {IHeaderProps} from './Header.props';

const Header: React.FC<IHeaderProps> = ({...props}): JSX.Element => {
	return <div {...props}>Header</div>;
};

export {Header};
