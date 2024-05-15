import React, { FC } from 'react';
import { Box, Screen } from '@/component';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { DishAndFoldEventSlots, HomeHeader, PresentWeekCalendar } from '@/component/Disher.HomeTab';
import { SearchAndFilter } from '@/component/Disher.HomeTab/SearchAndFilter';

export const HomeTab : FC = ()=> {
	return (
		<Screen isDefaultIOSPaddingFromTop={true} backgroundColor={'primaryColor'}>
			<Box flex={1}>
				<Box>
					<HomeHeader/>
					<PresentWeekCalendar/>
				</Box>
				<Box
					flex={1}
					marginTop={'sr'}
					borderTopLeftRadius={DeviceHelper.calculateHeightRatio(32)}
					borderTopRightRadius={DeviceHelper.calculateHeightRatio(32)}
					backgroundColor={'cultured'}>
					<SearchAndFilter/>
					<DishAndFoldEventSlots/>
				</Box>
			</Box>
		</Screen>
	);
};
