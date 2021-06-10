import { StackNavigationProp } from '@react-navigation/stack'
import address from 'assets/icons/address.png'
import addressSelected from 'assets/icons/addressSelected.png'
import autoPayments from 'assets/icons/autoPayments.png'
import autoPaymentsSelected from 'assets/icons/autoPaymentsSelected.png'
import counter from 'assets/icons/counter.png'
import counterSelected from 'assets/icons/counterSelected.png'
import home from 'assets/icons/home.png'
import homeSelected from 'assets/icons/homeSelected.png'
import notification from 'assets/icons/notification.png'
import notificationSelected from 'assets/icons/notificationSelected.png'
import payment from 'assets/icons/payment.png'
import paymentSelected from 'assets/icons/paymentSelected.png'
import statistics from 'assets/icons/statistics.png'
import statisticsSelected from 'assets/icons/statisticsSelected.png'
import FooterItem from 'components/items/FooterItem'
import React from 'react'
import { ImageSourcePropType, ImageStyle, StyleProp, View } from 'react-native'
import { AppStackParamList } from 'types'

import styles from './styles'

interface IFooterItem {
  text: string
  screenName: keyof AppStackParamList
  screenProp?: any
  icon: ImageSourcePropType
  selectedIcon: ImageSourcePropType
  iconStyle: StyleProp<ImageStyle>
  selected?: boolean
}

const FOOTER_ITEMS: IFooterItem[] = [
  {
    icon: home,
    selectedIcon: homeSelected,
    iconStyle: styles.homeIcon,
    screenName: 'Main',
    text: 'Головна',
    selected: true,
    screenProp: {
      withHistory: true,
    },
  },
  {
    icon: counter,
    selectedIcon: counterSelected,
    iconStyle: styles.counterIcon,
    screenName: 'Counters',
    text: 'Лічильники',
  },
  {
    icon: address,
    selectedIcon: addressSelected,
    iconStyle: styles.addressIcon,
    screenName: 'Addresses',
    text: 'Адреси',
  },
  {
    icon: notification,
    selectedIcon: notificationSelected,
    iconStyle: styles.notificationIcon,
    screenName: 'NotificationsAndPayments',
    text: 'Нагадування',
  },
  {
    icon: autoPayments,
    selectedIcon: autoPaymentsSelected,
    iconStyle: styles.autoPaymentsIcon,
    screenName: 'AutoPayments',
    text: 'Автоплатежі',
  },
  {
    icon: statistics,
    selectedIcon: statisticsSelected,
    iconStyle: styles.statisticsIcon,
    screenName: 'Statistic',
    text: 'Статистика',
  },
  {
    icon: payment,
    selectedIcon: paymentSelected,
    iconStyle: styles.paymentIcon,
    screenName: 'Payment',
    text: 'Оплата',
  },
]

interface FooterMenuProps {
  navigation: StackNavigationProp<AppStackParamList, keyof AppStackParamList>
}

const FooterMenu = ({ navigation: { navigate } }: FooterMenuProps) => (
  <View style={styles.footerMenu}>
    {FOOTER_ITEMS.map((item) => (
      <FooterItem
        key={item.text}
        icon={item.icon}
        iconStyle={item.iconStyle}
        text={item.text}
        selected={item.selected}
        onPress={() => navigate(item.screenName, item?.screenProp)}
      />
    ))}
  </View>
)

export default FooterMenu
