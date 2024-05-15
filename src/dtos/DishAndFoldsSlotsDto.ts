import moment from 'moment';

export interface DishAndFoldsEventDto {
	startTime:moment
	endTime:moment,
	title:string,
	rating:number,
	amount:number
}

export interface DishAndFoldsSlotsDto {
	slotStartTime:moment
	slotEndTIme:moment
	events:DishAndFoldsEventDto[]
}
