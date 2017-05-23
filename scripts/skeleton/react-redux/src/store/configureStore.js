import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// const finalCreateStore = compose(
//   applyMiddleware(thunk,createLogger)
// )(createStore);
const logger = createLogger();
export default function configureStore(initialState={}) {
  const store = createStore(
          rootReducer,
          initialState,
          compose(applyMiddleware(thunk,logger))
          );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
