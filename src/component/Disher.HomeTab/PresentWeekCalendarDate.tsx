import React from 'react';
import { Box, Text } from '@/component';
import { PresentWeekCalendarDay } from '@/component/Disher.HomeTab/PresentWeekCalendarDay';
import { PresentWeekCalendar } from '@/model';

export interface PresentWeekCalendarDateProps {
	presentWeekCalendar : PresentWeekCalendar
}

export const PresentWeekCalendarDate : React.FC<PresentWeekCalendarDateProps> = (
	{ presentWeekCalendar } : PresentWeekCalendarDateProps,
)=> {
	return (
		<Box alignItems={'center'}>
			<Text variant={'m12'}>{presentWeekCalendar.dayName()}</Text>
			<PresentWeekCalendarDay presentWeekCalendar={presentWeekCalendar}/>
		</Box>
	);
};
