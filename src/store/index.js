import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const middleWares = [thunk];

export default function () {
    const enhancer = composeWithDevTools(applyMiddleware(...middleWares));
    const store = createStore(reducer, enhancer);
    return store;
}
