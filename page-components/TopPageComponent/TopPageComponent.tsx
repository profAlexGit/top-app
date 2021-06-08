import {useReducer, useState, useEffect} from 'react';
import {Htag, Tag, HHData, Advantages, Sort, Product} from '../../components';
import {ESort} from '../../components/Sort/Sort.props';
import {ETopLevelCategory} from '../../interfaces/page.interface';
import styles from './TopPageComponent.module.scss';
import {ITopPageComponentProps} from './TopPageComponent.props';
import {sortReducer} from './sort.reducer';

const TopPageComponent: React.FC<ITopPageComponentProps> = ({
	firstCategory,
	products,
	page,
}): JSX.Element => {
	const [{products: sortedProducts, sort}, dispatch] = useReducer(sortReducer, {
		products,
		sort: ESort.Rating,
	});

	useEffect(() => {
		dispatch({type: 'SET_PRODUCTS', data: products});
	}, [products]);

	const setSort = (sort: ESort) => {
		dispatch({type: sort});
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				<Tag color="grey">{sortedProducts.length}</Tag>
				<Sort setSort={setSort} sort={sort} />
			</div>
			<div>
				{sortedProducts && sortedProducts.map((p) => <Product key={p._id} product={p} />)}
			</div>
			<div className={styles.hhBlock}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				<Tag color="red" size="m">
					hh.ru
				</Tag>
			</div>
			{firstCategory === ETopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}
			{page.advantages.length ? <Advantages advantage={page.advantages} /> : null}
			{page.seoText && (
				<div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div>
			)}
			{page.tags.length ? (
				<>
					<Htag tag="h2">{page.tagsTtitle}</Htag>
					{page.tags.map((tag) => (
						<Tag color="primary" size="s" className={styles.topPageTag} key={tag}>
							{tag}
						</Tag>
					))}
				</>
			) : null}
		</div>
	);
};

export {TopPageComponent};
