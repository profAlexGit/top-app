import {ESort, ISortProps} from './Sort.props';
import cn from 'classnames';
import SortIndicator from './sort.svg';
import styles from './Sort.module.scss';

const Sort: React.FC<ISortProps> = ({sort, setSort, className, ...props}): JSX.Element => {
	const getSortClasses = (sortField: ESort) => {
		return cn({
			[styles.active]: sort === sortField,
		});
	};

	const sortHandler = (sortField: ESort) => (): void => {
		setSort(sortField);
	};

	return (
		<div className={cn(className, styles.sort)} {...props}>
			<span className={getSortClasses(ESort.Rating)} onClick={sortHandler(ESort.Rating)}>
				<SortIndicator className={styles.sortIcon} />
				По рейтингу
			</span>
			<span className={getSortClasses(ESort.Price)} onClick={sortHandler(ESort.Price)}>
				<SortIndicator className={styles.sortIcon} />
				По цене
			</span>
		</div>
	);
};

export {Sort};
