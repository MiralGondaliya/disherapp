import React from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {AssetsListScreen, AssetsScreen} from '@/screens';

export type StackParamList = {
	AssetsListScreen:undefined
	AssetsScreen:{
		assetClass:string
		assetType:string
	}
};

export enum Routes {
	AssetsList = 'AssetsListScreen',
	Assets = 'AssetsScreen',
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

export function goBack() {
	if (navigationRef.isReady()) {
		if (navigationRef.canGoBack()) {
			navigationRef.goBack();
		}
	}
}

const navigationRef = createNavigationContainerRef<StackParamList>();

export const AssetsTabNavigator:React.FC = () =>{
	const Stack = createStackNavigator();
	return (
		<NavigationContainer
			ref={navigationRef}
			independent={true}
			onStateChange={() => {
			}}>

			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					cardStyleInterpolator:
                    CardStyleInterpolators.forScaleFromCenterAndroid,
					transitionSpec: {
						open: { animation: 'timing', config: { duration: 400 } },
						close: { animation: 'timing', config: { duration: 450 } },
					},
				}}
				initialRouteName={Routes.AssetsList}>

				<Stack.Screen name={Routes.AssetsList} component={AssetsListScreen} />
				<Stack.Screen name={Routes.Assets} component={AssetsScreen} />
			</Stack.Navigator>

		</NavigationContainer>
	);
};

