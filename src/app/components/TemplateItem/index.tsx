import arrowNext from 'assets/icons/arrowNext.png'
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

export interface TemplateItemProps {
  icon: ImageSourcePropType
  iconStyle?: StyleProp<ImageStyle>
  company: string
  description: string
  onPress: () => void
}

const TemplateItem = ({
  icon,
  company,
  description,
  iconStyle,
  onPress,
}: TemplateItemProps) => (
  <Touchable onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.flexStart}>
        <Image source={icon} style={[styles.templateIcon, iconStyle]} />
        <View style={styles.textWrapper}>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Image source={arrowNext} style={styles.arrowNext} />
    </View>
  </Touchable>
)

export default TemplateItem
