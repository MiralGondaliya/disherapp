import { fonts, theme } from '@/style';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import { Box } from './Box';
interface HeaderProps {
  title: string;
  navigation?: any;
  rightComponet?: React.ReactNode;
  onPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({title, navigation,onPress}) => {
  return (
    <Box style={styles.header}>
      <Pressable
        onPress={onPress}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="chevron-back"
          type="ionicon"
          color={theme.colors.primaryColor}
        />
        <Text style={styles.backText}>Back</Text>
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text></Text>
    </Box>
  );
};



const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backText: {
    fontSize: 15,
    fontWeight:'400',
    fontFamily: fonts.regular,
    color: theme.colors.seaBlue,
  },
  headerTitle: {
    fontSize: 17,
    fontFamily: fonts.regular,
    color: theme.colors.slateGray,
  },
});
