import React, { useEffect, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import {
	CommonActions,
	createNavigationContainerRef,
	NavigationContainer,
	StackActions,
} from '@react-navigation/native';

import RNSplashScreen from 'react-native-splash-screen';

import { TabNavigatorScreen } from '@/screens';

import { logger } from '@/logger/Logger';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { DeviceHelper } from '@/helper/DeviceHelper';
import { fonts } from '@/style';
import { pushNotificationHelper } from '@/utils/PushNotificationHelper';
import { utils } from '@/utils/Utils';
import { RESULTS } from 'react-native-permissions';


export const toastConfig = {
	/*
	  Overwrite 'success' type,
	  by modifying the existing `BaseToast` component
	*/
	success: (props: any) => (
		<BaseToast
			{...props}
			style={{
				borderLeftWidth: 0,
				height: DeviceHelper.calculateHeightRatio(50),
				maxWidth: DeviceHelper.calculateWidthRatio(200),
				alignItems: 'center',
				backgroundColor: '#344054CC',
				borderRadius: 8,
			}}
			contentContainerStyle={{
				alignItems: 'center',
				height: '100%',
				width: '100',
				backgroundColor: '#344054CC',
				borderRadius: 8,
			}}
			text2Style={{
				fontSize: 14,
				fontWeight: '600',
				fontFamily: fonts.regular,
				color: '#ffffff',
				lineHeight: 19.8,
				textAlign: 'center',
			}}
		/>
	),
	/*
	  Overwrite 'error' type,
	  by modifying the existing `ErrorToast` component
	*/
	error: (props: any) => (
		<ErrorToast
			{...props}
			text1Style={{
				fontSize: 17,
			}}
			text2Style={{
				fontSize: 30,
			}}
		/>
	),
};

export type StackParamList = {
	TabNavigatorScreen: undefined;

};

const navigationRef = createNavigationContainerRef<StackParamList>();

export enum Routes {
	TabNavigator = 'TabNavigatorScreen',
}
export interface NavigationProps {
	screenName: Routes;
	params?: any;
}

export function navigate({ screenName, params }: NavigationProps) {
	if (navigationRef.isReady()) {
		navigationRef.navigate(screenName, params);
	}
}

export function replace({ screenName, params }: NavigationProps) {
	if (navigationRef.isReady()) {
		navigationRef.dispatch({
			...StackActions.replace(screenName, params),
		});
	}
}

export function reset({ screenName, params }: NavigationProps) {
	if (navigationRef.isReady()) {
		navigationRef.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [{ name: screenName, params }],
			}),
		);
	}
}

export function goBack() {
	if (navigationRef.isReady()) {
		if (navigationRef.canGoBack()) {
			navigationRef.goBack();
		}
	}
}

export const safeNavigate = (route: Routes, params?: Record<string, any>) => {
	navigate({ screenName: route, params });
};



export interface AppNavigationProps {
	onRouteChange: (route: string) => void;
}
// @ts-ignore
export const AppNavigator: React.FunctionComponent<AppNavigationProps> = ({
	onRouteChange,
}) => {
	const Stack = createStackNavigator();
	const [loadNavigator, setLoadNavigator] = useState(false);
	const [initRouteName, setInitRouteName] = useState<Routes>();


	const requestPermission = async () => {
		const checkPermission = await utils.checkNotificationPermission();
		if (checkPermission !== RESULTS.GRANTED) {
			const request = await utils.requestNotificationPermission();
			if (request !== RESULTS.GRANTED) {
				// permission not granted
			}
		}
	};

	useEffect(() => {
		pushNotificationHelper.init(safeNavigate);
		if (DeviceHelper.isAndroid()) {
			requestPermission();
		}
		return pushNotificationHelper.registerOnMessageListener();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const init = async () => {
		Promise.all([]).then(async () => {
			setInitRouteName(Routes.TabNavigator);
			setLoadNavigator(() => true);
			setTimeout(() => {
				RNSplashScreen.hide();
			}, 100);
		}).catch((error) => {
			logger.info('Error', error);
		});
	};

	useEffect(() => {
		init();
	}, []);


	const navigator = (
		<>
			<NavigationContainer
				ref={navigationRef}
				independent={true}
				onStateChange={() => {}}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
						transitionSpec: {
							open: { animation: 'timing', config: { duration: 400 } },
							close: { animation: 'timing', config: { duration: 450 } },
						},
					}}
					initialRouteName={initRouteName as Routes}
				>
					<Stack.Screen name={Routes.TabNavigator} component={TabNavigatorScreen} />
				</Stack.Navigator>
			</NavigationContainer>
			<Toast config={toastConfig} />
		</>
	);

	return loadNavigator && navigator;
};
