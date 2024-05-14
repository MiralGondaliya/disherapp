import React, { createContext } from 'react';
import { Box, Text } from '@/component';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { PresentWeekCalendarDate } from '@/component/Disher.HomeTab/PresentWeekCalendarDate';
import usePresentCalenderDates from '@/hooks/usePresentCalenderDates';
import { PresentWeekCalendar as ModelPresentWeekCalendar } from '@/model';

export interface PresentWeekCalendarContextTye {
	selectedPresentWeekDate : ModelPresentWeekCalendar | undefined
	selectPresentWeekDate: (selectedPresentWeekDate: ModelPresentWeekCalendar)=> void
}
export const PresentWeekCalendarContext = createContext<PresentWeekCalendarContextTye>({
	selectedPresentWeekDate: undefined,
	selectPresentWeekDate: ()=> {},
});

export const PresentWeekCalendar : React.FC = ()=> {
	const { presentWeekCalendarList, selectedPresentWeekDate, selectPresentWeekDate } = usePresentCalenderDates();
	return (
		<PresentWeekCalendarContext.Provider value={{
			selectedPresentWeekDate,
			selectPresentWeekDate,
		}}>
			<Box
				paddingHorizontal={'sr'}
				paddingVertical={'s'}
				marginHorizontal={'r'}
				marginTop={'es'}
				borderRadius={DeviceHelper.calculateHeightRatio(12)}
				borderWidth={1}
				borderColor={'lightSilver53'}>
				<Box alignItems={'center'} paddingHorizontal={'es'}>
					<Text variant={'m14'}>{presentWeekCalendarList.monthName()}</Text>
				</Box>
				<Box
					paddingVertical={'sr'}
					width={'100%'}
					flexDirection={'row'}
					justifyContent={'space-between'}>
					{
						presentWeekCalendarList?.map((item, index)=>
							<PresentWeekCalendarDate presentWeekCalendar={item} key={index}/>)
					}
				</Box>
			</Box>
		</PresentWeekCalendarContext.Provider>
	);
};
