import React from 'react';
import { Box, Input, Pressable } from '@/component';
import { SvgIcon } from '@/assets/SvgIcon';
import { DeviceHelper } from '@/helper/DeviceHelper';

export const SearchAndFilter : React.FC = ()=> {
	return (
		<Box flexDirection={'row'} padding={'r'}>
			<Box flex={1}>
				<Input height={DeviceHelper.calculateWidthRatio(43)}/>
			</Box>
			<Pressable marginStart={'s'}>
				<SvgIcon width={DeviceHelper.calculateWidthRatio(43)}
					height={DeviceHelper.calculateHeightRatio(43)}
					name={'Filter'}
					fill={'white'}/>
			</Pressable>
		</Box>
	);
};
