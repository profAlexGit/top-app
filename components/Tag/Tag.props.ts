import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

type sizeType = 's' | 'm';
type colorType = 'none' | 'red' | 'green' | 'grey' | 'primary';

export interface ITagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: sizeType;
	children: ReactNode;
	href?: string;
	color?: colorType;
}
