import { AccountAssetSliceType } from '@/redux/slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Result } from '@/core';

export default {
	'AccountAsset': (state:AccountAssetSliceType, action:PayloadAction<Result<any>>) =>{
		state.AccountAssetResult = action.payload;
	},
};
