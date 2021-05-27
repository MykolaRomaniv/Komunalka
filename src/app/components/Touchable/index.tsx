import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface TouchableProps {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  activeOpacity?: number
  disabled?: boolean
}

const Touchable: React.FC<TouchableProps> = ({
  children,
  onPress,
  style,
  activeOpacity,
  disabled,
}) => (
  <TouchableOpacity
    activeOpacity={activeOpacity || 0.7}
    style={style}
    onPress={onPress}
    disabled={disabled}
  >
    {children}
  </TouchableOpacity>
)

export default Touchable
