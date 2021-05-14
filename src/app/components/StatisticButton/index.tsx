import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

interface StatisticButtonProps {
  children: string
  selected?: boolean
}

const StatisticButton = ({ children, selected }: StatisticButtonProps) => (
  <View style={[styles.statisticButton, selected && styles.selected]}>
    <Text style={styles.text}>{children}</Text>
  </View>
)

export default StatisticButton
