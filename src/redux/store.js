import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(
	thunk,
	logger
)(createStore);

export default function configureStore(rootReducer, initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
}
