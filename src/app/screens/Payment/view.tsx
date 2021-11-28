import { StackNavigationProp } from '@react-navigation/stack'
import arrowDown from 'assets/icons/arrowDown.png'
import calendar from 'assets/icons/calendar.png'
import PaymentSection from 'common/PaymentSection'
import Button from 'components/Button'
import PaymentItem, { PaymentItemProps } from 'components/items/PaymentItem'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStackParamList } from 'types'

import styles from './styles'

const PAYMENT_ITEMS: PaymentItemProps[] = [
  {
    company: 'КП “Львівводоканал”',
    utilityType: 'хол. вода і відведення',
    personalAccount: '670000080671',
    toPay: '200,00',
    wantToPay: '195,30',
    wilBePayed: '195,30',
  },
  {
    company: 'КП “ЛьвівСвітло”',
    utilityType: 'електропостачання',
    personalAccount: '480052080600',
    toPay: '156,00',
    wantToPay: '156,00',
    wilBePayed: '156,00',
  },
  {
    company: 'КП “ЛьвівГаз”',
    utilityType: 'опалення',
    personalAccount: '50490051667',
    toPay: '548,60',
    wantToPay: '548,00',
    wilBePayed: '548,00',
  },
]

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'Payment'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <PaymentSection />
    <Text style={styles.street}>{'Вулиця Лукаша, 54, 8'}</Text>
    <View style={styles.monthContainer}>
      <Image source={calendar} style={styles.calendarIcon} />
      <Text>{'Квітень 2021'}</Text>
      <Image source={arrowDown} style={styles.arrowDown} />
    </View>
    {PAYMENT_ITEMS.map((item, i) => (
      <PaymentItem
        key={i}
        company={item.company}
        personalAccount={item.personalAccount}
        toPay={item.toPay}
        utilityType={item.utilityType}
        wantToPay={item.wantToPay}
        wilBePayed={item.wilBePayed}
      />
    ))}
    <Button onPress={() => navigate('CardPayment')}>{'Сплатити 899,30'}</Button>
  </ScrollView>
)

export default ContentView
