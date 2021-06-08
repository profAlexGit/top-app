import {IHHDataProps} from './HHData.props';
import styles from './HHData.module.scss';
import {Card} from '../index';
import cn from 'classnames';
import Rate from './rate.svg';
import {priceRU} from '../../helpers/helpers';

const HHData: React.FC<IHHDataProps> = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card color="white" className={styles.total}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.value}>{count}</div>
			</Card>

			<Card color="white" className={styles.salary}>
				<div className={styles.salary_item}>
					<div className={styles.title}>Начальный</div>
					<div className={styles.value}>{priceRU(juniorSalary)}</div>
					<div className={styles.rate}>
						<Rate className={styles.filled} />
						<Rate />
						<Rate />
					</div>
				</div>

				<div className={styles.salary_item}>
					<div className={styles.title}>Средний</div>
					<div className={styles.value}>{priceRU(middleSalary)}</div>
					<div className={styles.rate}>
						<Rate className={styles.filled} />
						<Rate className={styles.filled} />
						<Rate />
					</div>
				</div>
				<div className={styles.salary_item}>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.value}>{priceRU(seniorSalary)}</div>
					<div className={styles.rate}>
						<Rate className={styles.filled} />
						<Rate className={styles.filled} />
						<Rate className={styles.filled} />
					</div>
				</div>
			</Card>

			{/* <div className={cn(styles.vacancy_item, styles.vacancy_range)}>
				
			</div> */}
		</div>
	);
};

export {HHData};
