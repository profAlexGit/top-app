import {IAdvantagesProps} from './Advantages.props';
import {Htag} from '../Htag/Htag';
import {Text} from '../Text/Text';
import AdvantageIcon from './advantageIcon.svg';
import styles from './Advantages.module.scss';

const Advantages: React.FC<IAdvantagesProps> = ({advantage}): JSX.Element => {
	console.log('advantage: ', advantage);
	return (
		<>
			<Htag tag="h2">Преимущества</Htag>
			{advantage.map((advantage) => (
				<div key={advantage._id} className={styles.advantage}>
					<AdvantageIcon />
					<Htag tag="h3">{advantage.title}</Htag>
					{advantage.description && (
						<>
							<hr className={styles.divider} />
							<Text>{advantage.description}</Text>
						</>
					)}
				</div>
			))}
		</>
	);
};

export {Advantages};
