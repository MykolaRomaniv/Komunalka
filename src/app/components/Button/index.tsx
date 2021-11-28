import Touchable from 'components/Touchable'
import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

interface ButtonProps {
  onPress?: () => void
  disabled?: boolean
  children: string
}

const Button = ({ onPress, disabled, children }: ButtonProps) => (
  <Touchable
    onPress={onPress}
    disabled={disabled}
    style={[styles.submitButton, disabled && styles.disabledButton]}
  >
    <Text style={styles.submitText}>{children}</Text>
  </Touchable>
)

export default Button
