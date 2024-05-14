import { Result } from '@/core';
import { createSlice } from '@reduxjs/toolkit';
import AccountAssetReducer from '@/redux/reducer/account.asset.reducer';
import { ACCOUNT_ASSET } from '@/redux/slice/Types';

export interface AccountAssetSliceType {
	AccountAssetResult?:Result<any>
}

export const initialState:AccountAssetSliceType = {
	AccountAssetResult: undefined,
};


const AccountAssetSlice = createSlice({
	name:ACCOUNT_ASSET,
	initialState:initialState,
	reducers:AccountAssetReducer,
});

export const { actions : accountAssetActions, reducer : accountAssetReducer } = AccountAssetSlice;
