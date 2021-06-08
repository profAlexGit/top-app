import {Button} from '../Button/Button';
import {Input} from '../Input/Input';
import {ISearchProps} from './Search.props';
import SearchIcon from './search.svg';
import styles from './Search.module.scss';
import cn from 'classnames';
import {ChangeEvent, useState} from 'react';
import {useRouter} from 'next/router';

const Search: React.FC<ISearchProps> = ({className, ...props}): JSX.Element => {
	const [searchStr, setSearchStr] = useState<string>('');
	const router = useRouter();

	const changeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchStr(e.target.value);
	};

	const keyDownHandler = (e: React.KeyboardEvent) => {
		e.key === 'Enter' && searchHandler();
	};

	const searchHandler = () => {
		router.push({
			pathname: '/search',
			query: {
				search: searchStr,
			},
		});
	};

	return (
		<div className={cn(styles.search, className)} {...props}>
			<Input
				placeholder="Поиск..."
				className={styles.input}
				value={searchStr}
				onChange={changeSearchHandler}
				onKeyDown={keyDownHandler}
			/>
			<Button className={styles.button} appearance="primary" onClick={searchHandler}>
				<SearchIcon />
			</Button>
		</div>
	);
};

export {Search};
