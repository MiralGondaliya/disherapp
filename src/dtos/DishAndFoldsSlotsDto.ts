import moment from 'moment';

export interface DishAndFoldsEventDto {
	startTime:moment.Moment
	endTime:moment.Moment,
	title:string,
	rating:number,
	amount:number,
	miles:number
	confirmed:number
}

export interface DishAndFoldsSlotsDto {
	slotStartTime:moment
	slotEndTIme:moment
	events:DishAndFoldsEventDto[]
}
