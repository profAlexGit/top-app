import React, {useState} from 'react';
import axios from 'axios';
import {Button, Htag, Input, Rating, Tag, Text, TextArea} from '../components';

import {withLayout} from '../layout/Layout';
import {GetStaticProps} from 'next';
import {IMenuItem} from '../interfaces/menu.interface';

export interface IHomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Home({menu}: IHomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(1);

	return (
		<>
			<Htag tag="h1">текст</Htag>
			<Button appearance="primary" arrow="down">
				Кнопка 1
			</Button>
			<Button appearance="outline" arrow="right">
				Кнопка 2
			</Button>
			<Text size="s">small</Text>
			<Text size="m">medium</Text>
			<Text size="lg">large</Text>
			<Tag>default</Tag>
			<Tag color="green">green</Tag>
			<Tag color="grey">grey</Tag>
			<Tag color="primary">primary</Tag>
			<Tag color="red">red</Tag>
			<Tag color="green" size="s">
				green-s
			</Tag>
			<Tag color="grey" size="s">
				grey-s
			</Tag>
			<Tag color="primary" size="s">
				primary-s
			</Tag>
			<Tag color="red" size="s">
				red-s
			</Tag>
			<Tag color="primary" size="s" href="https://hh.ru">
				hh.ru
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder="Имя" />
			<TextArea placeholder="Текст отзыва" />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<IMenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{firstCategory}
	);
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};
