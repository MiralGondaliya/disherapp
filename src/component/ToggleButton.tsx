import React from 'react';
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { Box } from './Box';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { Pressable } from './Pressable';
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/style";

export interface ToggleButtonProps {
	onPress: () => void;
	isOn: boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
	isOn,
	onPress,
}: ToggleButtonProps) => {
	const {colors} =useTheme<Theme>()
	const offset = useSharedValue(0);

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ translateX: offset.value }],
	}));

	React.useEffect(() => {
		if (isOn) {
			offset.value = withTiming(20, { duration: 170, easing: Easing.linear });
		} else {
			offset.value = withTiming(0, { duration: 170, easing: Easing.linear });
		}
	}, [isOn]);

	return (
		<Pressable
			onPress={onPress}
			backgroundColor={isOn ? 'green' : 'black'}
			height={DeviceHelper.calculateHeightRatio(33)}
			borderRadius={20}
			flexDirection="row"
			alignItems="center"
			width={47}
			overflow="hidden"
			borderWidth={1}
			borderColor={'red'}
		>
			<Animated.View style={[animatedStyles]}>
				<Box
					height={DeviceHelper.calculateWidthRatio(25)}
					width={DeviceHelper.calculateWidthRatio(25)}
					borderRadius={DeviceHelper.calculateWidthRatio(13)}
					marginStart="ss"
					justifyContent="center"
					backgroundColor={isOn ? "black" :"green"}
				/>
			</Animated.View>
		</Pressable>
	);
};
