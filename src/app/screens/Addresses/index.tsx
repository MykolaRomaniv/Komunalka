import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { replaceAddresses } from 'store/user/actions'
import { AppStackParamList, IAddressItem, ReduxState } from 'types'

import ContentView from './view'

interface AddressesProps {
  navigation: StackNavigationProp<AppStackParamList, 'Addresses'>
}

const Addresses = ({ navigation }: AddressesProps) => {
  const addresses = useSelector((state: ReduxState) => state.user.addresses)
  const dispatch = useDispatch()

  const onDelete = (newAddresses: IAddressItem[]) =>
    dispatch(replaceAddresses(newAddresses))

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}>{'Адреси'}</Header>
      <ContentView
        navigation={navigation}
        addresses={addresses}
        onDelete={onDelete}
      />
      <FooterMenu navigation={navigation} />
    </SafeAreaView>
  )
}

export default Addresses
