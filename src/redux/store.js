import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
