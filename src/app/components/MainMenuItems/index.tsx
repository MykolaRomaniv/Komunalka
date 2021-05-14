import Diagram from 'assets/icons/diagram.png'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, Text } from 'react-native'

import styles from './styles'

interface MainMenuItemsProps {
  title: string
  onPress: () => void
}

const MainMenuItems = ({ title, onPress }: MainMenuItemsProps) => (
  <Touchable style={styles.container} onPress={onPress}>
    <Image source={Diagram} style={styles.icon} />
    <Text>{title}</Text>
  </Touchable>
)

export default MainMenuItems
