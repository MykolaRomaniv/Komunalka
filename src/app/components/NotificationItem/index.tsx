import React from 'react'
import { Image, Text, View } from 'react-native'
import { INotification } from 'types'

import styles from './styles'

type NotificationItemProps = INotification

const NotificationItem = ({
  company,
  description,
  icon,
  body,
  sum,
}: NotificationItemProps) => (
  <View style={styles.container}>
    <View style={styles.flexStart}>
      <Image source={icon} style={styles.templateIcon} />
      <View style={styles.textWrapper}>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
    <Text>{sum}</Text>
  </View>
)

export default NotificationItem
