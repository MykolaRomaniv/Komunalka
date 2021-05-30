import Touchable from 'components/Touchable'
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
  onPress: () => void
}

const FooterItem = ({
  icon,
  iconStyle,
  selected,
  text,
  onPress,
}: FooterItemProps) => (
  <Touchable style={styles.container} onPress={onPress}>
    <Image source={icon} style={iconStyle} />
    <View style={styles.textWrapper}>
      <Text style={[styles.text, selected && styles.selected]}>{text}</Text>
    </View>
  </Touchable>
)

export default FooterItem
