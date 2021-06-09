import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

interface NotificationsAndPaymentsProps {
  navigation: StackNavigationProp<AppStackParamList, 'NotificationsAndPayments'>
}

const NotificationsAndPayments = ({
  navigation,
}: NotificationsAndPaymentsProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{'Оплата комунальних'}</Header>
    <ContentView navigation={navigation} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default NotificationsAndPayments
