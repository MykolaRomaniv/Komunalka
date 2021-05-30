import Button from 'components/Button'
import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const NoNotifications = () => (
  <View style={styles.content}>
    <Text style={styles.text}>{'У вас ще немає жодного нагадування'}</Text>
    <View style={styles.buttonWrapper}>
      <Button>{'Створити'}</Button>
    </View>
  </View>
)

export default NoNotifications
