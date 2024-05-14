import {theme} from '@/style';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({selected, onPress}) => {
  return (
    <TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: selected
              ? theme.colors.lightCornflowerBlue
              : theme.colors.slateGray,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {selected && (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: theme.colors.secondaryColor,
              }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
