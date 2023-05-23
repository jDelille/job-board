import { makeAutoObservable } from 'mobx';

class MobxStore {
	page: number;
	resultsPerPage: number;
	position: string;
	location: string;

	constructor() {
		makeAutoObservable(this);
		this.page = Number(localStorage.getItem('page')) || 1;
		this.resultsPerPage = 10;
		this.position = 'Frontend Developer';
		this.location = 'Arizona';
	}

	setPage = (page: number) => {
		this.page = page;
		localStorage.setItem('page', String(page));
	};
}

const Store = new MobxStore();
export default Store;
