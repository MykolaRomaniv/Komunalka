import { StackNavigationProp } from '@react-navigation/stack'
import addressHome from 'assets/icons/addressHome.png'
import autoPaymentHome from 'assets/icons/autoPaymentHome.png'
import counterHome from 'assets/icons/counterHome.png'
import notificationHome from 'assets/icons/notificationHome.png'
import paymentHome from 'assets/icons/paymentHome.png'
import statisticsHome from 'assets/icons/statisticsHome.png'
import Header from 'common/Header'
import PaymentSection from 'common/PaymentSection'
import MainMenuItems from 'components/MainMenuItems'
import PaymentHistoryItem from 'components/PaymentHistoryItem'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStackParamList, MenuItem } from 'types'

import styles from './styles'

const MENU_ITEMS: MenuItem[] = [
  {
    link: 'Payment',
    title: 'Оплатити комуналку',
    icon: paymentHome,
    iconStyle: styles.paymentIcon,
  },
  {
    link: 'Statistic',
    title: 'Статистика',
    icon: statisticsHome,
    iconStyle: styles.statisticsIcon,
  },
  {
    link: 'NotificationsAndPayments',
    title: 'Нагадування',
    icon: notificationHome,
    iconStyle: styles.notificationIcon,
  },
  {
    link: 'NotificationsAndPayments',
    title: 'Автоплатежі',
    icon: autoPaymentHome,
    iconStyle: styles.autoPaymentIcon,
  },
  {
    link: 'Addresses',
    title: 'Адреси',
    icon: addressHome,
    iconStyle: styles.addressIcon,
  },
  {
    link: 'Counters',
    title: 'Лічильники',
    icon: counterHome,
    iconStyle: styles.counterIcon,
  },
]

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'Main'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <Header>{'Привіт, Педро'}</Header>
    <PaymentSection />
    <View style={styles.menuItemsContainer}>
      {MENU_ITEMS.map((item) => (
        <MainMenuItems
          key={item.title}
          onPress={() => navigate(item.link)}
          item={item}
        />
      ))}
    </View>
    <Text style={styles.paymentHistoryTitle}>{'Історія платежів:'}</Text>
    <PaymentHistoryItem />
    <PaymentHistoryItem />
    <PaymentHistoryItem />
    <PaymentHistoryItem />
  </ScrollView>
)

export default ContentView
