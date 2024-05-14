import React from 'react';
import {Box, Pressable, Text} from '@/component';
import {Svg, SvgIcon} from '@/assets/SvgIcon';
import {fonts, theme} from '@/style';
import {goBack} from '@/navigation/AppNavigation';

export interface HeadingProps {
  title: string;
}
export const Heading: React.FC<HeadingProps> = ({
  title,
}: HeadingProps) => {

  return (
    <Box >
        <Text
        style={{color:theme.colors.dark}}
        marginVertical={'s'}
          fontSize={25}
          textAlign={'left'}
          fontFamily={fonts.bold}>
          {title}
        </Text>
      
    </Box>
  );
};
