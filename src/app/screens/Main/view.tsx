import { StackNavigationProp } from '@react-navigation/stack'
import addressHome from 'assets/icons/addressHome.png'
import autoPaymentHome from 'assets/icons/autoPaymentHome.png'
import counterHome from 'assets/icons/counterHome.png'
import notificationHome from 'assets/icons/notificationHome.png'
import paymentHome from 'assets/icons/paymentHome.png'
import statisticsHome from 'assets/icons/statisticsHome.png'
import PaymentSection from 'common/PaymentSection'
import MainMenuItems from 'components/MainMenuItems'
import PaymentHistoryItem, {
  PaymentHistoryItemProps,
} from 'components/PaymentHistoryItem'
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

const PAYMENT_HISTORY_ITEMS: PaymentHistoryItemProps[] = [
  {
    bankName: 'КФ ПАТ КБП”ПРИВАТБАНК”',
    payer: 'Григорак Ілона Анатоліївна',
    paymentDate: '20.04.2021',
    processDate: '21.04.2021',
  },
  {
    bankName: 'КФ ПАТ КБП”ПРИВАТБАНК”',
    payer: 'Григорак Ілона Анатоліївна',
    paymentDate: '20.05.2021',
    processDate: '21.05.2021',
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
    {PAYMENT_HISTORY_ITEMS.map((item, i) => (
      <PaymentHistoryItem
        key={i}
        bankName={item.bankName}
        payer={item.payer}
        paymentDate={item.paymentDate}
        processDate={item.processDate}
      />
    ))}
  </ScrollView>
)

export default ContentView
