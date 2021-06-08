import {ETopLevelCategory} from './page.interface';

export interface IPageItem {
	_id: string;
	alias: string;
	title: string;
	category: string;
}

export interface IMenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean;
	pages: IPageItem[];
}

export interface IFirstLevelMenu {
	route: string;
	name: string;
	icon: JSX.Element;
	_id: ETopLevelCategory;
}
