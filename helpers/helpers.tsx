import {IFirstLevelMenu} from '../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import {ETopLevelCategory} from '../interfaces/page.interface';

export const firstLevelMenu: IFirstLevelMenu[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon />, _id: ETopLevelCategory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon />, _id: ETopLevelCategory.Services},
	{route: 'books', name: 'Книги', icon: <BooksIcon />, _id: ETopLevelCategory.Books},
	{route: 'products', name: 'Продукты', icon: <ProductsIcon />, _id: ETopLevelCategory.Products},
];

export const priceRU = (price: number): string => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
};

export const declOfNum = (number: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
	];
};
