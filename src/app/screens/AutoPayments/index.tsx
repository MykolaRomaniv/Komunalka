/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackScreenProps } from '@react-navigation/stack'
import water from 'assets/icons/water.png'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList, INotification } from 'types'

import ContentView from './view'

type NotificationsAndPaymentsProps = StackScreenProps<
  AppStackParamList,
  'AutoPayments'
>

const NOTIFICATIONS: INotification[] = [
  {
    icon: water,
    company: 'КП “Львівводоканал”',
    description: 'хол. вода і відведення',
    body: 'Нагадування кожний 15тий день місяця',
    sum: '50₴',
  },
]

const NotificationsAndPayments = ({
  navigation,
  route: { params },
}: NotificationsAndPaymentsProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{'Оплата комунальних'}</Header>
    <ContentView navigation={navigation} notifications={[]} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default NotificationsAndPayments
