import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

type HtagType = 'h1' | 'h2' | 'h3';

export interface IHtagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag: HtagType;
	children: React.ReactNode;
}
