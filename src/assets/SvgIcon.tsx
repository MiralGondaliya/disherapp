import React, { useState } from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Color, Theme } from '@/style';
import { Pressable } from '@/component';

// import arrow_right from './svg/arrow_right.svg';

const DEFAULT_SIZE = 25;

export const svgs = {
	// arrowRight:arrow_right,
};

export type Svg = keyof typeof svgs;

export interface SvgIconProps {
	height?: number | string;
	width?: number | string;
	name: Svg;
	fill?: Color | string;
	stroke?: Color | string;
	onPress?: () => void;
	pressableProps?: PressableProps;
	disabled?: boolean;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
	name,
	fill,
	stroke,
	height = DEFAULT_SIZE,
	width = DEFAULT_SIZE,
	onPress,
	disabled,
	pressableProps,
}: SvgIconProps) => {
	const { colors } = useTheme<Theme>();
	// @ts-ignore
	const fillColor = fill ? colors[fill] ?? fill : undefined;
	// @ts-ignore
	const strokeColor = stroke ? colors[stroke] ?? stroke : undefined;
	const Svg = svgs[name];
	const [isPressed, setIsPressed] = useState<boolean>();

	return (
		<Pressable
			disabled={disabled || !onPress}
			hitSlop={onPress ? { top: 30, bottom: 30, left: 30, right: 30 } : undefined}
			justifyContent="center"
			alignItems="center"
			onPress={onPress}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			style={{ opacity: isPressed ? 0.5 : 1 }}
			{...pressableProps}>
			<Svg
				width={width}
				height={height}
				fill={fillColor}
				stroke={strokeColor}
			/>
		</Pressable>
	);
};
