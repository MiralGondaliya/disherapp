import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, NotificationsTab, ProfileTab, WalletTab } from '@/screens/BottomTabs';
import { CustomBottomTabBar } from '@/component/Disher.TabNavigator';
import { BottomTabs, CustomBottomTabBarDto } from '@/dtos';

const BottomTabData : Array<CustomBottomTabBarDto> = [
	{
		name:BottomTabs.HOME,
		component: HomeTab,
		icon: 'HomeTabIconSelected',
		iconSelected: 'HomeTabIconSelected',
	},
	{
		name:BottomTabs.WALLET,
		component: WalletTab,
		icon: 'WalletTabIcon',
		iconSelected: 'WalletTabIcon',
	},
	{
		name:BottomTabs.NOTIFICATIONS,
		component: NotificationsTab,
		icon: 'NotificationTabIcon',
		iconSelected: 'NotificationTabIcon',
	},
	{
		name:BottomTabs.PROFILE,
		component: ProfileTab,
		icon: 'ProfileTabIcon',
		iconSelected: 'ProfileTabIcon',
	},
];

export const TabNavigatorScreen : FC = ()=> {

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator initialRouteName={BottomTabData[0].name} tabBar={props => <CustomBottomTabBar {...props} bottomTabData={BottomTabData}/>} >
			{
				BottomTabData.map((tab)=>
					<Tab.Screen options={{ headerShown: false }} key={tab.name} name={tab.name} component={tab.component} />)
			}
		</Tab.Navigator>
	);
};
