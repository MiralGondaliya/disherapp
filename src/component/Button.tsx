import React from 'react';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable } from './Pressable';
import { fonts, Theme } from '@/style';
import { Text } from './Text';
import { DeviceHelper } from '@/helper/DeviceHelper';

export interface ButtonProps {
	label: string;
	onPress?: () => void;
	disabled?: boolean;
	isLoading?: boolean;
	marginHorizontal?: keyof Theme['spacing'];
	fontSize?: number
	height?:number,
}
export const Button: React.FC<ButtonProps> = ({
	label,
	onPress,
	disabled = false,
	isLoading,
	marginHorizontal,
	fontSize = 18,
	height = 62,
}: ButtonProps) => {
	const isShowLoader = (): boolean => !!isLoading;
	return (
		<LinearGradient
			style={{ width: '100%', borderRadius: 8 }}
			colors={disabled ? ['#E6E6E6', '#E6E6E6'] : ['#388094', '#1B5E7B']}
			start={{ x: 0, y: 0 }} // Optional: Set start point of gradient
			end={{ x: 1, y: 0 }}
		>
			<Pressable
				onPress={onPress}
				// disabled={isDisabled}
				// marginHorizontal={marginHorizontal ?? 'r'}
				shadowOffset={{ width: 0, height: 1 }}
				shadowOpacity={0.3}
				shadowRadius={2}
				borderRadius={25}
				paddingHorizontal={'r'}
				justifyContent="center"
				disabled={disabled}
				width="100%"
				height={DeviceHelper.calculateHeightRatio(height)}
			>
				{isShowLoader() ? (
					<ActivityIndicator size="small" color="white" />
				) : (
					<Text
						color={'white'}
						fontSize={fontSize}
						textAlign="center"
						lineHeight={16}
						fontFamily={fonts.bold}
					>
						{label}
					</Text>
				)}
			</Pressable>
		</LinearGradient>
	);
};
