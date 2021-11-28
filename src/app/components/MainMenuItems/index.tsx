import Touchable from 'components/Touchable'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { MenuItem } from 'types'

import styles from './styles'

interface MainMenuItemsProps {
  onPress: () => void
  item: MenuItem
}

const MainMenuItems = ({
  item: { icon, iconStyle, title },
  onPress,
}: MainMenuItemsProps) => (
  <Touchable style={styles.container} onPress={onPress}>
    <Image source={icon} style={[styles.icon, iconStyle]} />
    <View style={styles.textWrapper}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </Touchable>
)

export default MainMenuItems
