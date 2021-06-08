import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

type sizeTextType = 's' | 'm' | 'lg';

export interface ITextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: sizeTextType;
	children: ReactNode;
}
