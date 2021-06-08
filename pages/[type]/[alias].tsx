import axios from 'axios';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import {useRouter} from 'next/router';
import {ParsedUrlQuery} from 'querystring';
import {firstLevelMenu} from '../../helpers/helpers';
import {IMenuItem} from '../../interfaces/menu.interface';
import {ETopLevelCategory, ITopPageModel} from '../../interfaces/page.interface';
import {IProductModel} from '../../interfaces/product.interface';
import {TopPageComponent} from '../../page-components';
import {withLayout} from './../../layout/Layout';

interface ITopPageProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: ETopLevelCategory;
	page: ITopPageModel;
	products: IProductModel[];
}

const TopPage: React.FC<ITopPageProps> = ({page, products, firstCategory}): JSX.Element => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<>
			{/* {products && products.length} */}
			<TopPageComponent page={page} products={products} firstCategory={firstCategory} />
		</>
	);
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];

	for (const m of firstLevelMenu) {
		const {data: menu} = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{firstCategory: m._id}
		);
		paths = paths.concat(
			menu.flatMap((menuItem) => menuItem.pages.map((p) => `/${m.route}/${p.alias}`))
		);
	}

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {notFound: true};
	}
	console.log(`Building slug: ${params.alias}`);
	const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

	if (!firstCategoryItem) {
		return {notFound: true};
	}

	try {
		const {data: menu} = await axios.post<IMenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{firstCategory: firstCategoryItem._id}
		);

		if (menu.length === 0) {
			return {notFound: true};
		}

		const {data: page} = await axios.get<ITopPageModel>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
		);

		const {data: products} = await axios.post<IProductModel[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
			{category: page.category, limit: 10}
		);

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem._id,
				page,
				products,
			},
		};
	} catch {
		return {notFound: true};
	}
};
