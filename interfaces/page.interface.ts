export enum ETopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export interface ITopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface IHhdata {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface ITopPageModel {
	_id: string;
	tags: string[];
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTtitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: ETopLevelCategory;
	advantages: ITopPageAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	hh: IHhdata;
}
