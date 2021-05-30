import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
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
  <SafeAreaView>
    <ContentView />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default NotificationsAndPayments
