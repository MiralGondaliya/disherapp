/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import FlashMessage from 'react-native-flash-message';
import { theme } from './src/style/Theme';
import { NoInternetFullScreen } from '@/component/NoInternetFullScreen';
import { AppNavigator } from '@/navigation/AppNavigation';
import { FullScreenProgress, refFullScreenProgress } from '@/component/FullScreenProgress';
import { Provider } from 'react-redux';
import { store } from '@/redux/root.store';
import { initHttpClient } from '@/core';
import { BASE_URL } from '@/api';


const App: React.FC = () => {

	useEffect(()=> {
		initHttpClient(BASE_URL);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<NoInternetFullScreen onTryAgain={() => {}}>
					<AppNavigator onRouteChange={()=> {}} />
					<FlashMessage />
					<FullScreenProgress ref={refFullScreenProgress} />
					{/*<ForceUpdateFullScreen />*/}
				</NoInternetFullScreen>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
