import React, { FC } from 'react';
import { Box, Screen } from '@/component';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { HomeHeader, PresentWeekCalendar } from '@/component/Disher.HomeTab';
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
					marginTop={'s'}
					borderTopLeftRadius={DeviceHelper.calculateHeightRatio(32)}
					borderTopRightRadius={DeviceHelper.calculateHeightRatio(32)}
					backgroundColor={'cultured'}>
					<SearchAndFilter/>
				</Box>
			</Box>
		</Screen>
	);
};
