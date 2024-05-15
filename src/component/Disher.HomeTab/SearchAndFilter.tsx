import React from 'react';
import { Box, Pressable, Text } from '@/component';
import { SvgIcon } from '@/assets/SvgIcon';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/style';
import { translation } from '@/localisation/localisation';

export const SearchAndFilter : React.FC = ()=> {
	const { colors } = useTheme<Theme>();
	return (
		<Box flexDirection={'row'} padding={'r'}>
			<Box flex={1} overflow={'hidden'}>
				<Box
					paddingHorizontal={'r'}
					flexDirection={'row'}
					alignItems={'center'}
					justifyContent={'space-between'}
					height={DeviceHelper.calculateWidthRatio(43)}
					borderRadius={24}
					borderColor={'lightSilver53'}
					borderWidth={1}
					backgroundColor="transparent">
					<Box>
						<Text variant={'m12'}>{translation.homeConfirmDailyEarnings}</Text>
					</Box>
					<Text variant={'sm12'}>
						$ 90
					</Text>
				</Box>
			</Box>
			<Pressable marginStart={'s'}>
				<SvgIcon width={DeviceHelper.calculateWidthRatio(43)}
					height={DeviceHelper.calculateHeightRatio(43)}
					name={'Filter'}
					fill={colors.transparent}/>
			</Pressable>
		</Box>
	);
};
