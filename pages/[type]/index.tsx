import axios from 'axios';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import {ParsedUrlQuery} from 'querystring';
import {firstLevelMenu} from '../../helpers/helpers';
import {IMenuItem} from '../../interfaces/menu.interface';
import {ETopLevelCategory} from '../../interfaces/page.interface';
import {withLayout} from '../../layout/Layout';

interface ITypePageProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: ETopLevelCategory;
}

const Type: React.FC<ITypePageProps> = ({firstCategory}): JSX.Element => {
	return <>{firstCategory}</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map((m) => '/' + m.route),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ITypePageProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {notFound: true};
	}

	console.log('params: ', params);

	const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

	if (!firstCategoryItem) {
		return {notFound: true};
	}

	const {data: menu} = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{firstCategory: firstCategoryItem._id}
	);

	console.log('menu: ', menu);

	return {
		props: {
			menu,
			firstCategory: firstCategoryItem._id,
		},
	};
};
