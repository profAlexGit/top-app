import {Menu} from '../Menu/Menu';
import styles from './Sidebar.module.scss';

import {ISidebarProps} from './Sidebar.props';
import {Search} from '../../components';
import Logo from '../logo.svg';
import cn from 'classnames';

const Sidebar: React.FC<ISidebarProps> = ({className, ...props}) => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};

export {Sidebar};
