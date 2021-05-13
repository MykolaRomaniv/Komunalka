import UserCircle from 'components/UserCircle'
import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

interface HeaderProps {
  children: string
}

const Header = ({ children }: HeaderProps) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{children}</Text>
    <UserCircle />
  </View>
)

export default Header
