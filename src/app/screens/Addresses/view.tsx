import addressesBg from 'assets/addressesBg.png'
import add from 'assets/icons/add.png'
import trash from 'assets/icons/trash.png'
import AddressItem from 'components/AddressItem'
import UserCircle from 'components/UserCircle'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

const ContentView = () => (
  <ScrollView style={styles.page}>
    <View style={styles.header}>
      <Text style={styles.headerText}>{'Адреси'}</Text>
      <UserCircle />
    </View>
    <ImageBackground source={addressesBg} style={styles.background}>
      <View style={styles.iconsRow}>
        <Image source={trash} style={styles.trashIcon} />
        <Image source={add} style={styles.addIcon} />
      </View>
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" selected />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
      <AddressItem address="Вулиця Лукаша, 54, 8" city="м. Львів" />
    </ImageBackground>
  </ScrollView>
)

export default ContentView
