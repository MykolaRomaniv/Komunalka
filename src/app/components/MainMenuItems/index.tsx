import Diagram from 'assets/icons/diagram.png'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

interface MainMenuItemsProps {
  title: string
}

const MainMenuItems = ({ title }: MainMenuItemsProps) => (
  <View style={styles.container}>
    <Image source={Diagram} style={styles.icon} />
    <Text>{title}</Text>
  </View>
)

export default MainMenuItems
