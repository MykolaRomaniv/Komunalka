import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

interface CountersProps {
  navigation: StackNavigationProp<AppStackParamList, 'Counters'>
}

const Counters = ({ navigation }: CountersProps) => (
  <SafeAreaView>
    <ContentView />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default Counters
