import FooterMenu from 'common/FooterMenu'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import ContentView from './view'

const Main = () => (
  <SafeAreaView>
    <ContentView />
    <FooterMenu />
  </SafeAreaView>
)

export default Main
