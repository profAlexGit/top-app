import {ESort} from '../../components/Sort/Sort.props';
import {IProductModel} from '../../interfaces/product.interface';

export type SortActions =
	| {type: ESort.Price}
	| {type: ESort.Rating}
	| {type: 'SET_PRODUCTS'; data: IProductModel[]};

export interface ISortReducerState {
	sort: ESort;
	products: IProductModel[];
}

export const sortReducer = (state: ISortReducerState, action: SortActions): ISortReducerState => {
	console.log('state: ', state.products);
	switch (action.type) {
		case ESort.Rating:
			return {
				sort: ESort.Rating,
				products: state.products.sort((a, b) =>
					a.initialRating > b.initialRating ? -1 : 1
				),
			};
		case ESort.Price:
			return {
				sort: ESort.Price,
				products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
			};
		case 'SET_PRODUCTS':
			return {
				...state,
				products: action.data,
			};
		default:
			throw new Error("I don't know this type of sort");
	}
};
