import { StackNavigationProp } from '@react-navigation/stack'
import add from 'assets/icons/add.png'
import mapBg from 'assets/mapBg.png'
import SwipableList from 'common/SwipableList'
import AddressItem from 'components/AddressItem'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, View } from 'react-native'
import { AppStackParamList, IAddressItem } from 'types'

import styles from './styles'

const ADDRESSES: IAddressItem[] = [
  {
    address: 'Вулиця Лукаша, 54, 6',
    city: 'м. Львів',
  },
  {
    address: 'Вулиця Лукаша, 54, 7',
    city: 'м. Львів',
  },
  {
    address: 'Вулиця Лукаша, 54, 8',
    city: 'м. Львів',
  },
  {
    address: 'Вулиця Лукаша, 54, 9',
    city: 'м. Львів',
  },
  {
    address: 'Вулиця Лукаша, 54, 10',
    city: 'м. Львів',
  },
  {
    address: 'Вулиця Лукаша, 54, 11',
    city: 'м. Львів',
  },
]

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'Addresses'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <View style={styles.page}>
    <Image source={mapBg} style={styles.map} />
    <View style={styles.iconsRow}>
      <Touchable onPress={() => navigate('AddAddress')}>
        <Image source={add} style={styles.addIcon} />
      </Touchable>
    </View>
    <SwipableList
      data={ADDRESSES.map((address) => ({
        ...address,
        key: address.address,
      }))}
      renderItem={(item) => (
        <AddressItem address={item.item.address} city={item.item.city} />
      )}
    />
  </View>
)

export default ContentView
