import Touchable from 'components/Touchable'
import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

interface StatisticButtonProps {
  children: string
  selected?: boolean
  onPress?: () => void
}

const StatisticButton = ({
  children,
  selected,
  onPress,
}: StatisticButtonProps) => (
  <Touchable
    style={[styles.statisticButton, selected && styles.selected]}
    onPress={onPress}
  >
    <Text style={styles.text}>{children}</Text>
  </Touchable>
)

export default StatisticButton
