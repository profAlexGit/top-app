import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

type cardColorType = 'white' | 'blue';

export interface ICardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: cardColorType;
	children: ReactNode;
}
