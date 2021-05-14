import Touchable from 'components/Touchable'
import colors from 'constants/colors'
import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const UserCircle = () => (
  <Touchable>
    <LinearGradient
      colors={[colors.electricViolet, colors.torchRed]}
      style={styles.userCircle}
    >
      <Text style={styles.userCircleText}>{'NA'}</Text>
    </LinearGradient>
  </Touchable>
)

export default UserCircle
