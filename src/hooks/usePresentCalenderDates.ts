import { useEffect, useState } from 'react';
import moment from 'moment';
import { PresentWeekCalendar, PresentWeekCalendarList } from '@/model';
import { PresentWeekCalendarDto } from '@/dtos';

const usePresentCalenderDates = () => {
	const [presentWeekCalendarList, setPresentWeekCalendarList] = useState<PresentWeekCalendarList>(new PresentWeekCalendarList());
	const [selectedPresentWeekDate, selectPresentWeekDate] = useState<PresentWeekCalendar | undefined>();

	const prepareListOfNext7Days = ()=> {
		const dates : PresentWeekCalendarDto[]  = [];
		for (let i = 0; i < 7; i++) {
			const date = moment().add(i, 'days');
			dates.push({ _moment: date });
		}
		const mPresentWeekCalendarList = new PresentWeekCalendarList(dates);
		setPresentWeekCalendarList(mPresentWeekCalendarList);
		selectPresentWeekDate(mPresentWeekCalendarList.getItemByIndex(0));
	};

	useEffect(()=> {
		prepareListOfNext7Days();
	}, []);

	return {
		presentWeekCalendarList,
		selectedPresentWeekDate,
		selectPresentWeekDate,
	};
};

export default usePresentCalenderDates;
