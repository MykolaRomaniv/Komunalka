/**
 * @format
 */

import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/app/boot/setup'

AppRegistry.registerComponent(appName, () => App)
