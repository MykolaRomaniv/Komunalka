import { StackScreenProps } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { AppStackParamList, ReduxState } from 'types'

import ContentView from './view'

type MainProps = StackScreenProps<AppStackParamList, 'Main'>

const Main = ({ navigation }: MainProps) => {
  const userName = useSelector(
    (state: ReduxState) => state.user.userData?.user.name,
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}>{`Привіт, ${userName}`}</Header>
      <ContentView navigation={navigation} />
      <FooterMenu navigation={navigation} />
    </SafeAreaView>
  )
}

export default Main
