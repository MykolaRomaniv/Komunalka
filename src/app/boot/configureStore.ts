import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import {
  PersistConfig,
  Persistor,
  persistReducer,
  persistStore,
} from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from 'store'
import { ReduxState } from 'types'

const persistConfig: PersistConfig<ReduxState> = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['form'],
}

export interface IConfigureStore {
  store: Store
  persistor: Persistor
}

const ConfigureStore = (onCompletion: () => void): IConfigureStore => {
  let middleware: Middleware[] = [thunk]
  if (__DEV__) {
    middleware = [...middleware, logger]
  }

  const composeEnhancers = compose(applyMiddleware(...middleware))
  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(
    persistedReducer,
    __DEV__ ? composeWithDevTools(composeEnhancers) : composeEnhancers,
  )
  const persistor = persistStore(store, undefined, onCompletion)

  return {
    store,
    persistor,
  }
}

export default ConfigureStore
