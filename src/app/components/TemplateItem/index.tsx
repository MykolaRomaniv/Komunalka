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

interface TemplateItemProps {
  icon: ImageSourcePropType
  iconStyle?: StyleProp<ImageStyle>
  company: string
  description: string
}

const TemplateItem = ({
  icon,
  company,
  description,
  iconStyle,
}: TemplateItemProps) => (
  <Touchable>
    <View style={styles.container}>
      <Image source={icon} style={[styles.templateIcon, iconStyle]} />
      <View>
        <Text>{company}</Text>
        <Text>{description}</Text>
      </View>
      <Image source={arrowNext} style={styles.arrowNext} />
    </View>
  </Touchable>
)

export default TemplateItem
