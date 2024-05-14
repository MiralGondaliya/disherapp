import React from 'react';
import { Box, Image, Text } from '@/component';
import { Images } from '@/assets';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { fonts } from '@/style';
import { Pressable } from 'react-native';
import { SvgIcon } from '@/assets/SvgIcon';

export const HomeHeader: React.FC = ()=> {
	return (
		<Box
			variant={'borderCards'}
			flexDirection={'row'}
			marginHorizontal={'r'}
			borderRadius={DeviceHelper.calculateHeightRatio(12)}
			borderWidth={1}
			paddingHorizontal={'sr'}
			paddingVertical={'s'}
			marginTop={DeviceHelper.isIos() ? 'rr' : 'r'}
			borderColor={'lightSilver53'}>
			{/*User detail*/}
			<Box flexDirection={'row'} alignItems={'center'} flex={1}>
				<Image source={Images.user_avatar}
					borderRadius={DeviceHelper.calculateWidthRatio(22)}
					width={DeviceHelper.calculateWidthRatio(44)}
					height={DeviceHelper.calculateWidthRatio(44)} />
				<Box marginHorizontal={'s'}>
					<Text variant={'m12'}>Jenny Doe</Text>
					<Text variant={'r10'}>DishNFold Partner</Text>
				</Box>
			</Box>
			{/*Notification icon*/}
			<Pressable
				width={DeviceHelper.calculateWidthRatio(44)}
				height={DeviceHelper.calculateWidthRatio(44)}>
				<SvgIcon
					width={DeviceHelper.calculateWidthRatio(44)}
					height={DeviceHelper.calculateWidthRatio(44)}
					name={'Notification'}/>
				{/*Notification count*/}
				<Box
					minWidth={DeviceHelper.calculateWidthRatio(16)}
					height={DeviceHelper.calculateWidthRatio(16)}
					borderRadius={DeviceHelper.calculateWidthRatio(8)}
					position={'absolute'}
					justifyContent={'center'}
					alignItems={'center'}
					paddingHorizontal={'es'}
					backgroundColor={'sunSetOrange'} right={-2} top={-2}>
					<Text variant={'m10'} color={'primaryColor'}>2</Text>
				</Box>
			</Pressable>
		</Box>
	);
};
