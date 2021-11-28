import configureStore, { IConfigureStore } from 'boot/configureStore'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { setStore } from 'services/store'

import App from '../App'

interface IState {
  store: Store
  persistor: Persistor
}

class Setup extends React.Component<IConfigureStore, IState> {
  constructor(props: IConfigureStore) {
    super(props)

    const { store, persistor } = configureStore(() =>
      console.log('Loading end'),
    )
    setStore(store)

    this.state = {
      store,
      persistor,
    }
  }

  render() {
    const { store, persistor } = this.state
    return (
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RootSiblingParent>
            <PaperProvider>
              <App />
            </PaperProvider>
          </RootSiblingParent>
        </Provider>
      </PersistGate>
    )
  }
}
export default Setup
