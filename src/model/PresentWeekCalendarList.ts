import { List } from '@/model/core';
import { PresentWeekCalendar } from '@/model/PresentWeekCalendar';
import { PresentWeekCalendarDto } from '@/dtos';
import moment from 'moment/moment';

export class PresentWeekCalendarList extends List<PresentWeekCalendar> {
	constructor(dtos?:PresentWeekCalendarDto[]) {
		super(dtos ?? [], PresentWeekCalendar, true);
	}

	private  formatDateRange(dates: moment[]): string {
		if (dates.length <= 0) {
			return '';
		}
		const startDate = dates[0];
		const endDate = dates[dates.length - 1];

		const startMonth = startDate.format('MMMM');
		const endMonth = endDate.format('MMMM');

		const startYear = startDate.year();
		const endYear = endDate.year();

		if (startYear === endYear) {
			if (startMonth === endMonth) {
				return `${startMonth} ${startYear}`;
			} else {
				return `${startMonth} - ${endMonth} ${startYear}`;
			}
		} else {
			return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
		}
	}

	monthName() : string {
		return this.formatDateRange(this.map((item)=> item.momentDate));
	}
}
