import React, { useState } from 'react';
import { Box } from '@/component/Box';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { Keyboard, TextInput } from 'react-native';
import { Images } from '@/assets';
import { fonts, Theme } from '@/style';
import { useTheme } from '@shopify/restyle';
import { Image } from '@/component/Image';
import { Pressable } from '@/component/Pressable';

export interface SearchProps {
	onPress:(isShow:boolean)=>void;
	onClearText: () =>void
	onTextChange:(text:string)=> void
	onEndEditing:()=> void
}

export const Search:React.FC<SearchProps> = ({
	onPress,
	onClearText,
	onTextChange,
	onEndEditing,
}:SearchProps)=>{
	const { colors } = useTheme<Theme>();
	const [value, setValue] = useState('');
	const [isFocus, setIsFocus] = useState(false);

	const handleFocus = () => {
		setIsFocus(true);
		if (value === '') {
			onPress(false);
		}
	};
	const handleBlur = () => {
		setIsFocus(false);
		if (value === '') {
			onPress(true);
		}

	};
	const clearText = () => {
		setValue('');
		if (Keyboard.isVisible()) {
			Keyboard.dismiss();
		}
		onClearText();
	};

	const handelOnChange = (text:string) =>{
		setValue(text);
		onTextChange(text);
	};

	return (
		<Box
			marginHorizontal={'r'}
			marginVertical={'sr'}
		>
			<Box
				backgroundColor={'gainsboro2'}
				borderRadius={8}
				flexDirection={'row'}
				alignItems={'center'}
				overflow={'hidden'}
				paddingHorizontal={'s'}
				minHeight={DeviceHelper.calculateHeightRatio(44)}

			>
				{!isFocus && !value && (
					<Image
						source={Images.search}
						resizeMode={'contain'}
						height={DeviceHelper.calculateHeightRatio(22)}
						width={DeviceHelper.calculateWidthRatio(22)}
					/>
				)}
				<TextInput
					style={{
						fontFamily:fonts.regular,
						fontSize:14,
						lineHeight:14.4,
						color:'cadetGray',
						marginHorizontal: 8,
						overflow:'hidden',
						flex: 1,
					}}
					placeholder={'Search in assets'}
					placeholderTextColor={colors.cadetGray}
					keyboardType={'default'}
					onChangeText={handelOnChange}
					onEndEditing={onEndEditing}
					value={value}
					onFocus={()=> {handleFocus();}}
					onBlur={handleBlur}
				/>
				{value && (
					<Pressable
						padding={'es'}
						onPress={clearText}
					>
						<Image
							source={Images.circle_x}
							resizeMode={'contain'}
							height={DeviceHelper.calculateHeightRatio(16)}
							width={DeviceHelper.calculateWidthRatio(16)}
						/>
					</Pressable>
				)}
			</Box>
		</Box>
	);
};
