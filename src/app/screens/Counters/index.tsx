import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

interface CountersProps {
  navigation: StackNavigationProp<AppStackParamList, 'Counters'>
}

const Counters = ({ navigation }: CountersProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{'Показники лічильників'}</Header>
    <ContentView onSendPress={() => navigation.navigate('Main')} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default Counters
