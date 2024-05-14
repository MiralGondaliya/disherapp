import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { getHttpClient } from './HttpClient';
import { resolver } from './Utisl';
import { Result } from './Result';

let httpClient: AxiosInstance;
export const initHttpClient = (apiBaseUrl: string): void => {
	httpClient = getHttpClient(apiBaseUrl);
};

type Request = <T extends unknown>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
) => Promise<Result<T>>;

export const checkNetState = async (): Promise<boolean> => {
	const status = await NetInfo.fetch();
	return status?.isConnected ?? false;
};

export class Http {
	get: Request = async (url, config) => {
		if (!(await checkNetState())) {
			return Result.fail('Please check your internet connection');
		}
		const [value, error] = await resolver(
			httpClient.get<any, AxiosResponse>(url, config),
		);
		// console.log(JSON.stringify(config, undefined, 4));
		console.log('VALUE', JSON.stringify(value, undefined, 4));
		// value is AxiosResponse
		if (axios.isAxiosError(value)) {
			// Log, ToDo
			return Result.fail('Axios Error');
		}
		if (error) {
			// stock errors
			if (axios.isAxiosError(error)) {
				// catch & log, ToDo
			} else {
				// log other error, ToDo
			}
			return Result.fail('Error');
		}
		return Result.ok(value?.data);
	};

	post: Request = async (url, data, config) => {
		if (!(await checkNetState())) {
			return Result.fail('Please check your internet connection');
		}
		const [value, error] = await resolver(
			httpClient.post<any, AxiosResponse>(url, data, config),
		);
		console.log(JSON.stringify(config, undefined, 4));
		console.log(JSON.stringify(value, undefined, 4));
		// value is AxiosResponse
		if (axios.isAxiosError(JSON.stringify(value, undefined, 4))) {
			// Log, ToDo
			return Result.fail('Axios Error');
		}
		if (error) {
			// stock errors
			if (axios.isAxiosError(error)) {
				// catch & log, ToDo
			} else {
				// log other error, ToDo
			}
			return Result.fail('Error');
		}
		return Result.ok(value?.data);
	};

	delete: Request = async (url, config) => {
		if (!(await checkNetState())) {
			return Result.fail('Please check your internet connection');
		}
		const [value, error] = await resolver(
			httpClient.delete<any, AxiosResponse>(url, config),
		);
		// console.log('VALUE', value);
		// value is AxiosResponse
		if (axios.isAxiosError(value)) {
			// Log, ToDo
			return Result.fail('Axios Error');
		}
		if (error) {
			// stock errors
			if (axios.isAxiosError(error)) {
				// catch & log, ToDo
			} else {
				// log other error, ToDo
			}
			return Result.fail('Error');
		}
		return Result.ok(value?.data);
	};

	put: Request = async (url, data, config) => {
		if (!(await checkNetState())) {
			return Result.fail('Please check your internet connection');
		}
		const [value, error] = await resolver(
			httpClient.put<any, AxiosResponse>(url, data, config),
		);
		console.log('PUT', JSON.stringify(config, undefined, 4));
		console.log('PUT', JSON.stringify(value, undefined, 4));
		// value is AxiosResponse
		if (axios.isAxiosError(JSON.stringify(value, undefined, 4))) {
			// Log, ToDo
			return Result.fail('Axios Error');
		}
		if (error) {
			// stock errors
			if (axios.isAxiosError(error)) {
				// catch & log, ToDo
			} else {
				// log other error, ToDo
			}
			return Result.fail('Error');
		}
		return Result.ok(value?.data);
	};
}

export const http = new Http();
