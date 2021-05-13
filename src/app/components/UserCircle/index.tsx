import colors from 'constants/colors'
import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const UserCircle = () => (
  <LinearGradient
    colors={[colors.electricViolet, colors.torchRed]}
    style={styles.userCircle}
  >
    <Text style={styles.userCircleText}>{'NA'}</Text>
  </LinearGradient>
)

export default UserCircle
