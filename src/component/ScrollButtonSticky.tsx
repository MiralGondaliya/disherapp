import React from 'react';
import {Box} from './Box';
import {Pressable} from './Pressable';
import {DeviceHelper} from '@/helper/DeviceHelper';
import {fonts, theme, Theme} from '@/style';
import {Text} from './Text';
import {ResponsiveValue} from '@shopify/restyle';
import { Icon } from 'react-native-elements';
import { BlurView } from '@react-native-community/blur';
import { STATUS_BAR_HEIGHT } from '@/screens';

export interface ScrollButtonProps {
  onPress: () => void;
}
export const ScrollButton: React.FC<ScrollButtonProps> = ({
  onPress,
}: ScrollButtonProps) => {
  return (
    <>
      <Box height={65} bottom={130} right={-10} position={'absolute'}>
        <Box
          width={DeviceHelper.calculateWidthRatio(100)}
          borderTopLeftRadius={50}
          borderBottomLeftRadius={50}
          //   borderWidth={1}
          //   borderColor={'antiFlashWhite2'}
          overflow={'hidden'}>
          <BlurView
            blurAmount={24}
            blurType="light"
            style={{
              width: '100%',
              height: '100%',
            }}></BlurView>
        </Box>
      </Box>
      <Pressable
        onPress={onPress}
        position={'absolute'}
        bottom={130}
        right={-10}
        paddingHorizontal={'sr'}
        borderColor={'antiFlashWhite2'}
        width={DeviceHelper.calculateWidthRatio(100)}
        paddingVertical={'sr'}
        borderTopLeftRadius={50}
        borderBottomLeftRadius={50}>
        <Box
          borderWidth={1}
          borderColor={'antiFlashWhite'}
          borderRadius={50}
          style={{backgroundColor: '#D2E6EA66'}}
          width={40}
          height={40}
          alignItems={'center'}
          justifyContent={'center'}>
          <Icon
            name="arrow-down-outline"
            color={theme.colors.primaryColor}
            type="ionicon"
            size={25}
          />
        </Box>
      </Pressable>
    </>
  );
};
