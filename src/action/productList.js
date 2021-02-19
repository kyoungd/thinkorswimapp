import { ProductList } from './productListData';

import { DOWNLOAD_PL_SUCCESS } from './types';

export function doDownloadProductList() {
    console.log('doDownloadProductList() ');
    return dispatch => {
        dispatch({ type: DOWNLOAD_PL_SUCCESS, payload: ProductList });
    }
}
