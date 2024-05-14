import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {
	accountAssetActions,
	accountAssetReducer,
} from '@/redux/slice';


export const actions = {
	accountAssetActions: accountAssetActions,
};

export const reducers = {
	accountAsset:accountAssetReducer,
};

export const store = configureStore({
	reducer:reducers,
	enhancers:undefined,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof  store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
