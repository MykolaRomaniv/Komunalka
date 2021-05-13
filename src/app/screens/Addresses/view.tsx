import addressesBg from 'assets/addressesBg.png'
import add from 'assets/icons/add.png'
import trash from 'assets/icons/trash.png'
import UserCircle from 'components/UserCircle'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

import styles from './styles'

const ContentView = () => (
  <View style={styles.page}>
    <View style={styles.header}>
      <Text style={styles.headerText}>{'Addresses'}</Text>
      <UserCircle />
    </View>
    <ImageBackground source={addressesBg} style={styles.background}>
      <View style={styles.iconsRow}>
        <Image source={trash} style={styles.trashIcon} />
        <Image source={add} style={styles.addIcon} />
      </View>
    </ImageBackground>
  </View>
)

export default ContentView
