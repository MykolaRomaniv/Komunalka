import { StackNavigationProp } from '@react-navigation/stack'
import UserCircle from 'components/UserCircle'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { AppStackParamList, ReduxState } from 'types'

import styles from './styles'

interface HeaderProps {
  children: string
  navigation: StackNavigationProp<AppStackParamList, keyof AppStackParamList>
}

const Header = ({ children, navigation: { navigate } }: HeaderProps) => {
  const user = useSelector((state: ReduxState) => state.user.userData?.user)
  const [userInitials, setUserInitials] = useState<string>()

  useEffect(() => {
    user &&
      user.name &&
      user.familyName &&
      setUserInitials(
        `${user.name[0].toUpperCase()}${user.familyName[0].toUpperCase()}`,
      )
  }, [user])

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{children}</Text>
      <UserCircle
        onPress={() => navigate('Registration')}
        userInitials={userInitials}
      />
    </View>
  )
}

export default Header
