import { createNavigationContainerRef } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './AppNavigation';
import { Routes } from './AppNavigation';
import { AppNavigationProps } from './AppNavigation';
import {
    DealDigestUploadScreen,
    DealDigestLandingPage,
    DealDigestDetailScreen
} from '@/screens'

const navigationRef = createNavigationContainerRef<StackParamList>();

const DealDigestNavigator: React.FunctionComponent<AppNavigationProps> = ({
    onRouteChange,
}) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={DealDigestLandingPage}
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 400 } },
                    close: { animation: 'timing', config: { duration: 450 } },
                },
            }}
        >
            <Stack.Screen name={Routes.DealDigestLandingPage} component={DealDigestLandingPage} />
            <Stack.Screen name={Routes.DealDigestUploadScreen} component={DealDigestUploadScreen} />
            <Stack.Screen name={Routes.DealDigestDetailScreen} component={DealDigestDetailScreen} />
        </Stack.Navigator>
    )
}
export default DealDigestNavigator;