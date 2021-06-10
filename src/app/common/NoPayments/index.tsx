import Button from 'components/Button'
import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

interface NoNotificationsProps {
  onButtonPress: () => void
}

const NoNotifications = ({ onButtonPress }: NoNotificationsProps) => (
  <View style={styles.content}>
    <Text style={styles.text}>{'У вас ще немає жодного автоплатежу'}</Text>
    <View style={styles.buttonWrapper}>
      <Button onPress={onButtonPress}>{'Створити'}</Button>
    </View>
  </View>
)

export default NoNotifications
