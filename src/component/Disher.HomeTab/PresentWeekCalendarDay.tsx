import React, { useContext, useMemo } from 'react';
import { Box, Pressable, Text } from '@/component';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { PresentWeekCalendar } from '@/model';
import { PresentWeekCalendarContext } from '@/component/Disher.HomeTab/PresentWeekCalendar';

export interface PresentWeekCalendarDayProps {
	presentWeekCalendar : PresentWeekCalendar
}


export const PresentWeekCalendarDay : React.FC<PresentWeekCalendarDayProps> = (
	{ presentWeekCalendar } : PresentWeekCalendarDayProps,
)=> {
	const { selectedPresentWeekDate, selectPresentWeekDate } = useContext(PresentWeekCalendarContext);

	const isSelected = useMemo(()=> {
		return selectedPresentWeekDate?.day() === presentWeekCalendar.day();
	}, [presentWeekCalendar, selectedPresentWeekDate]);

	const handleOnSelect = () => {
		if (!isSelected) {
			selectPresentWeekDate(presentWeekCalendar);
		}
	};

	return (
		<Pressable
			onPress={handleOnSelect}
			alignItems={'center'}
			marginTop={'s'}
			backgroundColor={isSelected ? 'candyCorn' : 'transparent'}
			justifyContent={'center'}
			borderRadius={DeviceHelper.calculateHeightRatio(24)}
			width={DeviceHelper.calculateWidthRatio(36.54)}
			height={DeviceHelper.calculateHeightRatio(38)}>
			<Text variant={'m14'} color={isSelected ? 'chinesBlack' : 'cloud'}>{presentWeekCalendar.day()}</Text>
			<Box opacity={isSelected ? 1 : 0} width={5} height={5} borderRadius={3} backgroundColor={'chinesBlack'}/>
		</Pressable>
	);
};
