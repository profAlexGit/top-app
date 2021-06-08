import {IProductProps} from './Product.props';
import styles from './Product.module.scss';
import cn from 'classnames';
import {Card} from '../Card/Card';
import {Rating} from '../Rating/Rating';
import {Tag} from '../Tag/Tag';
import {Text} from '../Text/Text';
import {Button} from '../Button/Button';
import {Htag} from '../Htag/Htag';
import {declOfNum, priceRU} from '../../helpers/helpers';
import {Divider} from '../Divider/Divider';
import Image from 'next/image';
import {useState} from 'react';

const Product: React.FC<IProductProps> = ({product}): JSX.Element => {
	const [openReview, setOpenReview] = useState<boolean>(false);

	const toggleReview = () => {
		setOpenReview((prev) => !prev);
	};

	return (
		<>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						width={70}
						height={70}
						alt={product.title}
					/>
					{/* <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /> */}
				</div>
				<Htag tag="h3" className={styles.title}>
					{product.title}
				</Htag>
				<div className={styles.price}>
					{priceRU(product.price)}
					{product.oldPrice && (
						<Tag size="s" color="green" className={styles.oldPrice}>
							{priceRU(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>
				<div className={styles.credit}>
					{priceRU(product.credit)}/<span className={styles.month}>мес</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={styles.tags}>
					{product.categories.map((tag) => (
						<Tag className={styles.category} color="none" key={tag} size="s">
							{tag}
						</Tag>
					))}
				</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>в кредит</div>
				<div className={styles.rateTitle}>
					{product.reviewCount}
					{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
				</div>
				<Divider className={styles.hr} />
				<Text size="m" className={styles.description}>
					{product.description}
				</Text>
				<div className={styles.features}>
					{product.characteristics.map((item) => {
						if (!item.value) {
							return null;
						}
						return (
							<div className={styles.characteristic} key={item.name}>
								<span className={styles.name}>{item.name}</span>
								<span className={styles.dots}></span>
								<span className={styles.value}>{item.value}</span>
							</div>
						);
					})}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<div className={styles.advTitle}>Преимущества</div>
							{product.advantages}
						</div>
					)}
					{product.disAdvantages && (
						<div className={styles.disadvantages}>
							<div className={styles.advTitle}>Недостатки</div>
							{product.disAdvantages}
						</div>
					)}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance="primary">Узнать подробнее</Button>
					<Button
						className={styles.reviewButton}
						appearance="outline"
						arrow={openReview ? 'down' : 'right'}
						onClick={toggleReview}
					>
						{openReview ? 'Скрыть отзывы' : 'Читать отзывы'}
					</Button>
				</div>
			</Card>
			<Card
				className={cn(styles.review, {
					[styles.open]: openReview,
				})}
				color="blue"
			>
				<Htag tag="h3">Review</Htag>
			</Card>
		</>
	);
};

export {Product};
