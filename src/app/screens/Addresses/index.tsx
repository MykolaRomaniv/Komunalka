import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

interface AddressesProps {
  navigation: StackNavigationProp<AppStackParamList, 'Addresses'>
}

const Addresses = ({ navigation }: AddressesProps) => (
  <SafeAreaView>
    <ContentView navigation={navigation} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default Addresses
