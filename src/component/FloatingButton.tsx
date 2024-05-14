import React from 'react';
import {ActivityIndicator, Platform, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Pressable} from './Pressable';
import {fonts, Theme} from '@/style';
import {Text} from './Text';
import {DeviceHelper} from '@/helper/DeviceHelper';
import { Icon } from 'react-native-elements';

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  marginHorizontal?: keyof Theme['spacing'];
  fontSize?: number;
  height?: number;
  width?: number;
}
export const FloatingButton: React.FC<ButtonProps> = ({
  onPress,
  isLoading,
  marginHorizontal,
  fontSize = 18,
  height = 55,
  width = 55
}: ButtonProps) => {
  return (
    <LinearGradient
      style={[{width: DeviceHelper.calculateWidthRatio(width),position:'absolute',bottom: Platform.OS=='ios' ? 110:90
      }, styles.container]}
      colors={ ['#388094', '#1B5E7B']}
      start={{x: 0, y: 0}} // Optional: Set start point of gradient
      end={{x: 1, y: 0}}>
      <Pressable
        onPress={onPress}
        // disabled={isDisabled}
        // marginHorizontal={marginHorizontal ?? 'r'}
        shadowOffset={{width: 0, height: 1}}
        shadowOpacity={0.3}
        shadowRadius={2}
        borderRadius={25}
        justifyContent="center"
        width={DeviceHelper.calculateWidthRatio(width)}
        height={DeviceHelper.calculateHeightRatio(height)}>
        <Icon name='add' size={25} color={'white'} />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    right:20,
    borderRadius: 200,
    shadowColor: "#111",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 8,
  }
})
