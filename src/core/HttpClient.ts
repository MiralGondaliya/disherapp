import axios, { AxiosInstance } from 'axios';
import { Storage } from '@/core/Storage';


export const getHttpClient = (baseURL: string): AxiosInstance => {
	const http = axios.create({
		baseURL,
		timeout: 1000 * 30 * 4, // Wait for 30 seconds
		headers: {
			Accept: 'application/json',
		},
	});
	http.interceptors.request.use(async function (config) {
		const token = await Storage.getItemAsync(Storage.keys.authToken);
		if (token !== null && token !== '') {
			config.headers.Authorization =  token ? `${token}` : '';
		}
		return config;
	});

	http.interceptors.response.use(
		response => {
			return response;
		},
		(error) => {
			if (error.response && error.response.status === 401) {
				const { url, method, headers, data } = error.config;
				console.log('Original request URL:', url);
				console.log('Original request method:', method);
				console.log('Original request headers:', headers);
				console.log('Original request data:', data);
				return Promise.reject('Unauthorized');
			}
			// Handle other errors here
			return Promise.reject(error);
		},
	);

	return http;
};
