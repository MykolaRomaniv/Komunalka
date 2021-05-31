import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

interface MainProps {
  navigation: StackNavigationProp<AppStackParamList, 'Main'>
}

const Main = ({ navigation }: MainProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{'Привіт, Педро'}</Header>
    <ContentView navigation={navigation} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default Main
