import addressesBg from 'assets/addressesBg.png'
import add from 'assets/icons/add.png'
import trash from 'assets/icons/trash.png'
import Header from 'common/Header'
import AddressItem from 'components/AddressItem'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

const ContentView = () => (
  <ScrollView style={styles.page}>
    <Header>{'Адреси'}</Header>
    <ImageBackground source={addressesBg} style={styles.background}>
      <View style={styles.iconsRow}>
        <Touchable>
          <Image source={trash} style={styles.trashIcon} />
        </Touchable>
        <Touchable>
          <Image source={add} style={styles.addIcon} />
        </Touchable>
      </View>
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" selected />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
    </ImageBackground>
  </ScrollView>
)

export default ContentView
