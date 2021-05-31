import location from 'assets/location.png'
import Button from 'components/Button'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

interface NoAddressesProps {
  onPress: () => void
}

const NoAddresses = ({ onPress }: NoAddressesProps) => (
  <View style={styles.container}>
    <Text>{'Ще немає жодної адреси'}</Text>
    <Image source={location} style={styles.icon} />
    <View style={styles.buttonWrapper}>
      <Button onPress={onPress}>{'Додати адресу'}</Button>
    </View>
  </View>
)

export default NoAddresses
