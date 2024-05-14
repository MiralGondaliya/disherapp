import { dispatchable } from '@/redux/dispatchable';
import { Dispatch } from 'react';
import { accountAssetActions } from '@/redux/slice';
import { getDefaultError, Result } from '@/core';
import { Action } from '@/redux/slice/Types';

export const accountAssetThunkCall = dispatchable(()=> {
	return async (dispatch:Dispatch<Action>) =>{
		try {
			dispatch(accountAssetActions.AccountAsset(Result.waiting()));
			const response = Result.ok();

			if (response.isSuccess) {
				return response;
			}
			//Dispatch to fail the response
			dispatch(accountAssetActions.AccountAsset(Result.fail(response.error ?? 'accountAssetThunkCall')));
			return getDefaultError(response.error, 'accountAssetThunkCall');
		} catch (e) {
			//Dispatch to fail the response
			dispatch(accountAssetActions.AccountAsset(Result.fail(e ?? 'accountAssetThunkCall')));
			return getDefaultError(e, 'CATCH accountAssetThunkCall');
		}
	};
});
