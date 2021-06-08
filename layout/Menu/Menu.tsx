import {useContext} from 'react';
import {AppContext} from '../../context/app.context';
import {IMenuItem, IPageItem} from '../../interfaces/menu.interface';

import {ETopLevelCategory} from '../../interfaces/page.interface';
import cn from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './Menu.module.scss';
import {firstLevelMenu} from '../../helpers/helpers';

const Menu: React.FC = (): JSX.Element => {
	const {menu, setMenu, firstCategory} = useContext(AppContext);
	const router = useRouter();

	const firstLevelMenuClasses = (currentCategory: ETopLevelCategory) =>
		cn(styles.firstLevelMenu, {
			[styles.active]: currentCategory === firstCategory,
		});

	const secondLevelBlock = (menu: IMenuItem): string => {
		if (menu.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
			menu.isOpened = true;
		}

		return cn(styles.secondLevelBlock, {
			[styles.opened]: menu.isOpened,
		});
	};

	const ThirdLevelMenuClasses = (page: IPageItem, route: string) =>
		cn(styles.thirdLevelMenu, {
			[styles.active]: `/${route}/${page.alias}` === router.asPath,
		});

	const openSecondLevel = (secondCategory: string) => () => {
		if (!setMenu) {
			return;
		}

		const newMenu = menu.map((m) => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}

			if (m._id.secondCategory !== secondCategory && m.isOpened) {
				m.isOpened = false;
			}
			return m;
		});

		setMenu(newMenu);
	};

	const buildFirstLevelMenu = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map((menu) => (
					<div key={menu.route}>
						<Link href={`/${menu.route}`}>
							<a>
								<div className={firstLevelMenuClasses(menu._id)}>
									{menu.icon}
									<span>{menu.name}</span>
								</div>
							</a>
						</Link>

						{menu._id === firstCategory && buildSecondLevelMenu(menu.route)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevelMenu = (route: string): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((menuItem) => (
					<div key={menuItem._id.secondCategory}>
						<div
							className={styles.secondLevelMenu}
							onClick={openSecondLevel(menuItem._id.secondCategory)}
						>
							{menuItem._id.secondCategory}
						</div>
						<div className={secondLevelBlock(menuItem)}>
							{buildThirdLevelMenu(menuItem.pages, route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevelMenu = (pages: IPageItem[], baseRoute: string): JSX.Element => {
		return (
			<div>
				{pages.map((page) => (
					<Link href={`/${baseRoute}/${page.alias}`} key={page._id}>
						<a className={ThirdLevelMenuClasses(page, baseRoute)}>{page.category}</a>
					</Link>
				))}
			</div>
		);
	};

	return <div className={styles.menu}>{buildFirstLevelMenu()}</div>;
};

export {Menu};
