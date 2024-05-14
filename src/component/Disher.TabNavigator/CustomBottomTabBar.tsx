import React, { FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Box, Pressable } from '@/component';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { CustomBottomTabBarDto } from '@/dtos';
import { SvgIcon } from '@/assets/SvgIcon';

export interface CustomBottomTabBarProps extends  BottomTabBarProps {
	bottomTabData : CustomBottomTabBarDto[]
}

export const CustomBottomTabBar : FC<CustomBottomTabBarProps> = (
	{ state, bottomTabData, navigation } : CustomBottomTabBarProps,
)=> {
	return (
		<Box
			width={'100%'}
			position={'absolute'}
			bottom={0}
			minHeight={DeviceHelper.calculateWidthRatio( 64)}
			backgroundColor={'transparent'}>

			<Box
				backgroundColor={'white'}
				borderRadius={24}
				marginHorizontal={'r'}
				flexDirection={'row'}
				justifyContent={'space-between'}
				paddingHorizontal={'r'}>
				{
					state.routes.map((route, index)=> {
						const isFocused = state.index === index;
						const onPress = () => {
							const event = navigation.emit({
								type: 'tabPress',
								target: route.key,
							});

							if (!isFocused && !event.defaultPrevented) {
								navigation.navigate(route.name);
							}
						};

						return (
							<Box
								key={route.key}
								flexDirection={'row'}
								width={DeviceHelper.calculateWidthRatio(48)}
								height={DeviceHelper.calculateWidthRatio(48)}>
								<Pressable onPress={onPress} left={index == 1 ? -24 : index === 2 ? 24  : 0}>
									<SvgIcon name={bottomTabData[index].icon}
										fill={isFocused ? '#000000' : '#ffffff'}
										width={DeviceHelper.calculateWidthRatio(48)}
										height={DeviceHelper.calculateWidthRatio(48)}
									/>
								</Pressable>
								{
									index === 1 &&
									<SvgIcon
										width={DeviceHelper.calculateWidthRatio(48)}
										height={DeviceHelper.calculateWidthRatio(48)}
										name={'CreateTabIcon'}/>
								}
							</Box>
						);
					})
				}
			</Box>
		</Box>
	);
};
