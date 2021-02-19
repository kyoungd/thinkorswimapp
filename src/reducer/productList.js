
import { DOWNLOAD_PL_STARTED, DOWNLOAD_PL_SUCCESS, DOWNLOAD_PL_ERROR } from '../action/types';

const initialState = {
    products: [],
    downloadStarted: false,
    downloadSuccess: false,
    downloadError: false
}

export default function (state = initialState, action) {
    console.log('reducer - productList ', action.type);
    switch (action.type) {
        case DOWNLOAD_PL_STARTED:
            return {
                ...state,
                downloadStarted: true,
                downloadSuccess: false,
                downloadError: false
            };
        case DOWNLOAD_PL_SUCCESS:
            return {
                ...state,
                products: action.payload,
                downloadStarted: false,
                downloadSuccess: true,
                downloadError: false
            };
        case DOWNLOAD_PL_ERROR:
            return {
                ...state,
                downloadStarted: false,
                downloadSuccess: false,
                downloadError: true
            };
        default:
            return state;

    }
}
