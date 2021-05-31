import { StackNavigationProp } from '@react-navigation/stack'
import add from 'assets/icons/add.png'
import mapBg from 'assets/mapBg.png'
import NoAddresses from 'common/NoAddresses'
import SwipableList from 'common/SwipableList'
import AddressItem from 'components/AddressItem'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, View } from 'react-native'
import { AppStackParamList, IAddressItem } from 'types'

import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'Addresses'>
  addresses: IAddressItem[]
}

const ContentView = ({
  navigation: { navigate },
  addresses,
}: ContentViewProps) => (
  <View style={styles.page}>
    <Image source={mapBg} style={styles.map} />
    <View style={styles.iconsRow}>
      <Touchable onPress={() => navigate('AddAddress')}>
        <Image source={add} style={styles.addIcon} />
      </Touchable>
    </View>
    {addresses.length ? (
      <SwipableList
        data={addresses.map((address) => ({
          ...address,
          key: address.address,
        }))}
        renderItem={(item) => (
          <AddressItem address={item.item.address} city={item.item.city} />
        )}
      />
    ) : (
      <NoAddresses />
    )}
  </View>
)

export default ContentView
