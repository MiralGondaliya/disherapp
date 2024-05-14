import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { ResponsiveValue, useTheme } from '@shopify/restyle';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { fonts, Theme } from '@/style';
import { Images } from '@/assets';
import { Box, FieldError, FieldErrorProps, Image, Pressable, Text } from '@/component';

export interface InputHintProps {
	hint?: string;
}

export interface InputImageProps {
	// @ts-ignore
	iconName?: Images;
}

export interface InputProps
	extends InputHintProps,
	InputImageProps,
	TextInputProps {
	onPress?: () => void;
	leftComponent?: React.ReactNode;
	rightComponent?: React.ReactNode;
	isBottomMargin?: boolean;
	hasError?: boolean;
	isCountry?: boolean;
	countryName?: string;
	isPatternInput?: boolean;
	maxLength?: number;
	isHeight?: boolean;
	height?: number;
	isIcon?: boolean;
	onApply?: () => void;
	disable?: boolean;
	ref?: React.ForwardedRef<any>;
}

export const InputHint: React.FC<InputHintProps> = ({ hint }: InputHintProps) => (
	<Box
		position="absolute"
		paddingHorizontal="ss"
		top={-8}
		left={16}
		backgroundColor="white"
	>
		<Text variant="inputHint">{hint}</Text>
	</Box>
);

export const InputImage: React.FC<InputImageProps> = ({
	iconName,
}: InputImageProps) => (
	<Box>
		<Image
			source={iconName}
			width={DeviceHelper.calculateWidthRatio(20)}
			height={DeviceHelper.calculateHeightRatio(20)}
		/>
	</Box>
);

export const Input: React.FC<InputProps> = (props: InputProps) => {
	const {
		onPress,
		leftComponent,
		isBottomMargin = true,
		hasError,
		maxLength,
		height,
		disable = false,
		rightComponent,
		ref,
	} = props;
	const [isFocused, setIsFocused] = useState(false);
	const textInputProps = props as TextInputProps;
	const fieldErrorProps = props as FieldErrorProps;
	const { multiline, value, placeholder, keyboardType, autoCapitalize } = textInputProps;
	const { colors } = useTheme<Theme>();


	const borderColor = ():ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']> => {
		if (hasError) {
			return 'red';
		}
		if (isFocused) {
			return 'lightSilver53';
		}
		return 'lightSilver53';
	};


	return (
		<Box marginBottom={isBottomMargin ? 'r' : 'ss'}>
			<Pressable
				disabled={!onPress}
				width="100%"
				borderWidth={1}
				borderRadius={height ?  height / 2 : 30}
				borderColor={borderColor()}
				flexDirection="row"
				alignItems="center"
				backgroundColor={disable ? 'white' : 'white'}
				onPress={DeviceHelper.ios() ? undefined : onPress}
				overflow="hidden"
				paddingVertical={multiline ? 'sr' : 'none'}
				height={DeviceHelper.calculateHeightRatio(height ?? 60)}
			>
				{leftComponent}
				<TextInput
					ref={ref}
					onTouchEnd={onPress}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					maxLength={maxLength}
					style={{
						fontFamily: fonts.regular,
						fontSize: 16,
						flex: 1,
						height: '100%',
						marginTop: multiline ? 16 : 0,
						paddingTop: multiline ? 16 : 0,
						paddingStart: leftComponent ? 0 : 16,
						color: colors.chinesBlack,
						paddingVertical: multiline ? 16 : 0,
						textAlignVertical: multiline ? 'top' : 'center',
					}}
					{...textInputProps}
					keyboardType={keyboardType}
					value={value}
					autoCapitalize={autoCapitalize}
					placeholder={placeholder}
					placeholderTextColor={colors.lightGray}
				/>
				{rightComponent && rightComponent}
			</Pressable>
			<Box alignSelf="flex-start">
				<FieldError {...fieldErrorProps} />
			</Box>
		</Box>
	);
};
