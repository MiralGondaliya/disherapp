import React, { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';

import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export interface CollapsableContainerProps {
	children: React.ReactNode;
	expanded: boolean;
	defaultHeight?: number,
}

export const CollapsableContainer:React.FC <CollapsableContainerProps> = ({
	children,
	defaultHeight = 0,
	expanded }:CollapsableContainerProps) => {
	const [height, setHeight] = useState(defaultHeight);
	const animatedHeight = useSharedValue(0);

	const onLayout = (event: LayoutChangeEvent) => {
		const onLayoutHeight = event.nativeEvent.layout.height;

		if (onLayoutHeight > 0 && height !== onLayoutHeight) {
			setHeight(onLayoutHeight);
		}
	};

	/*	const collapsableStyle = useAnimatedStyle(() => {
		animatedHeight.value = expanded ? withTiming(height) : withTiming(0);

		return {
			height: animatedHeight.value,
		};
	}, [expanded]);*/

	const collapsableStyle = useAnimatedStyle(() => {
		animatedHeight.value = expanded
			? withTiming(height, { duration: 800, easing: Easing.linear }) // Adjust duration here (in milliseconds)
			: withTiming(0, { duration: 800, easing: Easing.linear }); // Adjust duration here (in milliseconds)

		return {
			height: animatedHeight.value,
		};
	}, [expanded]);


	return (
		<Animated.View style={[collapsableStyle, { overflow: 'hidden' }]}>
			<View style={{ position: 'absolute' }} onLayout={onLayout}>
				{children}
			</View>
		</Animated.View>
	);
};
