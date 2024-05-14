import React from 'react';
import { Box } from '@/component/Box';
import { Icon } from 'react-native-elements';
import { fonts, Theme } from '@/style';
import { useTheme } from '@shopify/restyle';
import { Text } from '@/component/Text';
import { Pressable } from '@/component/Pressable';
import { goBack } from '@/navigation/AssetsTabNavigator';
import { translation } from '@/localisation/localisation';

export interface CommonHeaderProps {
	title:string
	onGoBackPress?: () => void
	subTitle:string
}

export const CommonHeader:React.FC<CommonHeaderProps> = ({
	title,
	onGoBackPress,
	subTitle,
}:CommonHeaderProps) =>{
	const { colors } = useTheme<Theme>();

	const handelOnGoBackPress = () =>{
		if (onGoBackPress) {
			onGoBackPress();
		} else {
			goBack();
		}
	};

	return (
		<Box
			marginTop={'r'}
			paddingHorizontal={'r'}
			paddingBottom={'s'}
			flexDirection={'row'}
			alignItems={'center'}
		>
			<Pressable
				onPress={handelOnGoBackPress}
				height={'100%'}
				justifyContent={'flex-start'}
				paddingHorizontal={'sr'}
			>
				<Icon
					name="chevron-back"
					type="ionicon"
					color={colors.primaryColor}
				/>
			</Pressable>
			<Box>
				<Text
					fontSize={24}
					fontWeight={'700'}
					fontFamily={fonts.bold}
					lineHeight={24}
					color={'seaBlue'}
					paddingVertical={'ss'}
				>
					{title}
				</Text>
				<Text
					fontSize={14}
					fontWeight={'500'}
					fontFamily={fonts.medium}
					lineHeight={16.8}
					color={'cadetGray'}
				>
					{`${translation.from.toLowerCase()} ${subTitle}`}
				</Text>

			</Box>

		</Box>
	);
};
