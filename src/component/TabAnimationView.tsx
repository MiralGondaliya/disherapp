import { LayoutChangeEvent } from 'react-native';
import React, { FC, useState } from 'react';
import Animated, { ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useTheme } from '@shopify/restyle';
import { fonts, Theme } from '@/style';
import { Box, Pressable, Text } from '@/component';

export interface TabButton {
	title: string;
}

interface TabButtonsProps {
	buttons: TabButton[];
	selectedTab: string;
	setSelectedTab: (option: string) => void;
}

/**
 * An animated tab bar of buttons - when user selects a button, tab slides and style changes
 */
export const TabButtons: FC<TabButtonsProps> = ({
	buttons,
	selectedTab,
	setSelectedTab,
}) => {
	const { colors } = useTheme<Theme>();
	const [dimensions, setDimensions] = useState({ height: 20, width: 70 });

	const buttonWidth = dimensions.width / buttons.length;

	const padding = 5;

	// this will keep track of the translationX value of our moving tab
	const tabPositionX = useSharedValue(0);

	// on view layout, we measure the width and height and
	// set in state so we know how far to move the tab
	const onTabbarLayout = (e: LayoutChangeEvent) => {
		setDimensions({
			width: e.nativeEvent.layout.width,
			height: e.nativeEvent.layout.height,
		});
	};

	// We can set a callback for any functionality that should fire once the animation is finished
	const handlePressCb = (option: string) => {
		setSelectedTab(option);
	};

	const onTabPress = (index:number) => {
		// animate the tab and fire callback
		tabPositionX.value = withTiming(buttonWidth * index, {
			duration:500,
		}, () => {});
	};

	const animatedStyle = useAnimatedStyle(() => {
		// apply animated value to the style, moving the tab
		return {
			transform: [{ translateX: tabPositionX.value }],
		};
	});

	return (
		<Box
			backgroundColor={'lightBlue'}
			justifyContent={'center'}
			borderRadius={10}
			padding={'ss'}
			marginHorizontal={'r'}
			marginTop={'r'}
		>
			<Animated.View
				style={[
					animatedStyle,
					{
						height: dimensions.height - padding,
						width: buttonWidth - 8,
						backgroundColor:colors.white,
						position:'absolute',
						marginStart:6,
						borderRadius:5,
					},
				]}
			/>
			<Box onLayout={onTabbarLayout} flexDirection={'row'}>
				{buttons.map((button, index) => {
					const color = selectedTab === button.title ? 'cadetGray' : 'aliceBlue';
					return (
						<Pressable
							key={index.toString()}
							onPress={() => {
								handlePressCb(button.title);
								onTabPress(index);
							}}
							flex={1}
							alignItems={'center'}
							justifyContent={'center'}
							margin={'es'}
							borderRadius={5}
							paddingVertical={'s'}
						>
							<Text
								fontSize={14}
								fontWeight={'600'}
								color={color}
								letterSpacing={0.12}
								lineHeight={16.8}
								fontFamily={fonts.semiBold}
							>
								{button.title}
							</Text>
						</Pressable>
					);
				})}
			</Box>
		</Box>
	);
};
