import React from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  View,
} from 'react-native'

import styles from './styles'

interface FooterItemProps {
  icon: ImageSourcePropType
  iconStyle: StyleProp<ImageStyle>
  selected?: boolean
  text: string
}

const FooterItem = ({ icon, iconStyle, selected, text }: FooterItemProps) => (
  <View style={styles.container}>
    <Image source={icon} style={iconStyle} />
    <Text style={[styles.text, selected && styles.selected]}>{text}</Text>
  </View>
)

export default FooterItem
