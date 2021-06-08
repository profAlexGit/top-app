import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

type appearanceType = 'primary' | 'outline';
type arrowType = 'right' | 'down' | 'none';

export interface IButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	appearance: appearanceType;
	arrow?: arrowType;
}
