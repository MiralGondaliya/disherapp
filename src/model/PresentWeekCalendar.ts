import { EntityId, Model } from '@/model/core';
import { PresentWeekCalendarDto } from '@/dtos';
import moment from 'moment';

export class PresentWeekCalendar extends Model<PresentWeekCalendarDto> {
	id!:EntityId;
	public constructor(dto: PresentWeekCalendarDto) {
		super(dto);
	}

	get momentDate(): moment {
		return this.dto._moment;
	}

	isPresentDay(): boolean {
		return this.momentDate.isSame(moment(), 'day') ?? false;
	}

	day():string {
		return this.momentDate?.format('DD') ?? '';
	}

	dayName():string {
		return this.momentDate?.format('ddd') ?? '';
	}
}
