import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import { ADDRESSES } from 'constants/exampleData'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

interface AddressesProps {
  navigation: StackNavigationProp<AppStackParamList, 'Addresses'>
}

const Addresses = ({ navigation }: AddressesProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{'Адреси'}</Header>
    <ContentView navigation={navigation} addresses={ADDRESSES} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default Addresses
