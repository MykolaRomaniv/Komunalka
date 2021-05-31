import { StackNavigationProp } from '@react-navigation/stack'
import UserCircle from 'components/UserCircle'
import React from 'react'
import { Text, View } from 'react-native'
import { AppStackParamList } from 'types'

import styles from './styles'

interface HeaderProps {
  children: string
  navigation: StackNavigationProp<AppStackParamList, keyof AppStackParamList>
}

const Header = ({ children, navigation: { navigate } }: HeaderProps) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{children}</Text>
    <UserCircle onPress={() => navigate('Registration')} />
  </View>
)

export default Header
