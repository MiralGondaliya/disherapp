import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export class Storage {
	static keys = Object.freeze({
		platformData:'platformData',
		id:'id',
		fcmToken: 'fcmToken',
		authToken: 'authToken',
		baseUrl:'baseUrl',
		pinFiledCount:'pinFiledCount',
		oneTimeScreen:'oneTimeScreen',
		clickedDiscussionInHomeScreen:'clickedDiscussionInHomeScreen',
	});
	static async setItemAsync(key: string, value: string): Promise<void> {
		await AsyncStorage.setItem(key, value);
	}

	static async getItemAsync(key: string): Promise<string | null> {
		/**
		 * Adding a backup patch
		 * latest refreshed auth token
		 * everytime this method has been called
		 * to get the token
		 */
		if (key === Storage.keys.authToken) {
			let token = await AsyncStorage.getItem(key);
			const isTokenExist = await AsyncStorage.getItem(key);
			if (isTokenExist) {
				const currentUser = auth().currentUser;
				if (currentUser) {
					token = await currentUser.getIdToken();
				}
			}
			return token;
		}
		return AsyncStorage.getItem(key);
	}

	static async existAsync(key: string): Promise<boolean> {
		const value = await AsyncStorage.getItem(key);
		return !!value;
	}

	static async deleteItemAsync(key: string): Promise<void> {
		return AsyncStorage.removeItem(key);
	}

	static async logout(): Promise<void> {
		const fcmToken = await this.getItemAsync(this.keys.fcmToken);
		const oneTimeScreen = await this.getItemAsync(this.keys.oneTimeScreen);
		const clickedDiscussionInHomeScreen = await this.getItemAsync(this.keys.clickedDiscussionInHomeScreen);
		await AsyncStorage.clear();
		await this.setItemAsync(this.keys.fcmToken, fcmToken ?? '');
		await this.setItemAsync(this.keys.oneTimeScreen, oneTimeScreen ?? '');
		await this.setItemAsync(this.keys.clickedDiscussionInHomeScreen, clickedDiscussionInHomeScreen ?? '');
	}
}
