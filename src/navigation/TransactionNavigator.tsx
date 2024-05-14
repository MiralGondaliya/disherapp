import { createNavigationContainerRef } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './AppNavigation';
import { Routes } from './AppNavigation';
import { AppNavigationProps } from './AppNavigation';
import {
	TransactionLandingPage,
	TransactionDetails,
	TransactionType,
	TransactionSubtype,
} from '@/screens';

const navigationRef = createNavigationContainerRef<StackParamList>();

const TransactionNavigator: React.FunctionComponent<AppNavigationProps> = ({
	onRouteChange,
}) => {

	const Stack = createStackNavigator();

	return (
		<Stack.Navigator
			initialRouteName={Routes.TransactionLandingPage}
			screenOptions={{
				headerShown: false,
				cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
				transitionSpec: {
					open: { animation: 'timing', config: { duration: 400 } },
					close: { animation: 'timing', config: { duration: 450 } },
				},
			}}
		>
			<Stack.Screen name={Routes.TransactionLandingPage} component={TransactionLandingPage} />
			<Stack.Screen name={Routes.TransactionDetails} component={TransactionDetails} />
			<Stack.Screen name={Routes.TransactionType} component={TransactionType} />
			<Stack.Screen name={Routes.TransactionSubtype} component={TransactionSubtype} />
		</Stack.Navigator>
	);
};
export default TransactionNavigator;
