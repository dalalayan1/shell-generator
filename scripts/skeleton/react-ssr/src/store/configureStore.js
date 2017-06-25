import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// const finalCreateStore = compose(
//   applyMiddleware(thunk,createLogger)
// )(createStore);
const logger = createLogger();
export default function configureStore(initialState={}) {
  const enhancers = [
    applyMiddleware(thunk,logger)
  ];

  const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
          rootReducer,
          initialState,
           composeEnhancers(...enhancers)
          );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
