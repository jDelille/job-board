export type Job = {
	id: string;
	created: string;
	company: {
		display_name: string;
	};
	category: {
		label: string;
		tag: string;
	};
	description: string;
	latitude: number;
	longitude: number;
	location: {
		display_name: string;
	};
	redirect_url: string;
	salary_is_predicted: string;
	salary_max: number;
	salary_min: number;
	title: string;
};
