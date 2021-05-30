import add from 'assets/icons/add.png'
import mapBg from 'assets/mapBg.png'
import Header from 'common/Header'
import AddressItem from 'components/AddressItem'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

const ContentView = () => (
  <View style={styles.page}>
    <Header>{'Адреси'}</Header>
    <Image source={mapBg} style={styles.map} />
    <View style={styles.iconsRow}>
      <Touchable>
        <Image source={add} style={styles.addIcon} />
      </Touchable>
    </View>
    <ScrollView style={styles.scrollable}>
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
    </ScrollView>
  </View>
)

export default ContentView
