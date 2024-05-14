import * as React from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import TabNavigationData from './TabNavigationData';
import { useTheme } from '@shopify/restyle';
import { fonts, Theme } from '@/style';
import styles from './styles';

type RootTabParamList = {
	[key: string]: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabNavigatorProps = {
	navigation: BottomTabNavigationProp<RootTabParamList>;
};

function TabNavigator({ navigation }: TabNavigatorProps) {
	const headerRightComponent = (_screenName: string) => {
		return null;
	};

	const { colors } = useTheme<Theme>();

	return (
    <Tab.Navigator
      initialRouteName={TabNavigationData[0].name}
      screenOptions={() => {
        return {
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 92 : 70,
            backgroundColor: colors.white,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            position: 'absolute',
            paddingHorizontal: 5,
            paddingTop: 5,
          },
          headerShown: false,
          tabBarHideOnKeyboard: true,
        };
      }}>
      {TabNavigationData.map((item, idx) => (
        <Tab.Screen
          key={`tab_item${idx + 1}`}
          name={item.name}
          component={item.component}
          listeners={{
            tabPress: e => {
              navigation.setOptions({
                headerRight: () => headerRightComponent(item.name),
              });
            },
          }}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabBarItemContainer}>
                <Image
                  resizeMode="contain"
                  source={item.icon}
                  style={[
                    styles.tabBarIcon,
                    focused && styles.tabBarIconFocused,
                  ]}
                />
              </View>
            ),
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  marginBottom: 10,
                  fontFamily: fonts.regular,
                  fontSize: 11,
                  marginTop: Platform.OS == 'ios' ? 0 : -5,
                  color: '#040F0F',
                }}>
                {item.name}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default TabNavigator;
