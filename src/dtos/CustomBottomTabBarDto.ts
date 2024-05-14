import React from 'react';
import { Svg } from '@/assets/SvgIcon';

export enum BottomTabs {
	HOME = 'Home',
	WALLET = 'Wallet',
	NOTIFICATIONS = 'Notifications',
	PROFILE = 'Profile',
}

export interface CustomBottomTabBarDto {
	name:BottomTabs,
	component: React.ReactNode
	icon?:Svg,
	iconSelected?:Svg
}
