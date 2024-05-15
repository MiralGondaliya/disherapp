import React from 'react';
import { Box, Text } from '@/component';
import { Svg, SvgIcon } from '@/assets/SvgIcon';
import { translation } from '@/localisation/localisation';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@/style';

export const DishAndFoldEventBox : React.FC = ()=> {
	const { colors } = useTheme<Theme>();

	const iconText = (iconName:Svg, label:string)=> {
		return (
			<Box flexDirection={'row'} alignItems={'center'}>
				<SvgIcon
					fill={colors.candyCorn}
					height={DeviceHelper.calculateWidthRatio(7)}
					width={DeviceHelper.calculateWidthRatio(7)}
					name={iconName}/>
				<Box marginStart={'ss'}>
					<Text variant={'r8'}>{label}</Text>
				</Box>
			</Box>
		);
	};

	return (
		<Box
			style={{
				marginEnd:7,
			}}
			width={DeviceHelper.calculateWidthRatio(130)}
			height={DeviceHelper.calculateHeightRatio(80)}>
			<Box
				backgroundColor={'candyCorn'}
				padding={'s'}
				borderRadius={12}
				width={DeviceHelper.calculateWidthRatio(130)}
				height={DeviceHelper.calculateHeightRatio(74)}>
				<Text variant={'sm10'}>DISH</Text>
				<Box marginTop={'ss'} flexDirection={'row'} justifyContent={'space-between'}>
					{iconText('LocationPin', `${5} ${translation.homeMilesFromYou}`)}
					{iconText('Rating', '4.8')}
				</Box>
				<Box  marginTop={'ss'} flexDirection={'row'} justifyContent={'space-between'}>
					{iconText('ClockIcon', '7:00 to 8:00 am')}
					{iconText('DollarIcon', '30')}
				</Box>
			</Box>
		</Box>
	);
};
