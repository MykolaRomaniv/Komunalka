import { StackNavigationProp } from '@react-navigation/stack'
import arrowDown from 'assets/icons/arrowDown.png'
import calendar from 'assets/icons/calendar.png'
import Header from 'common/Header'
import PaymentSection from 'common/PaymentSection'
import Button from 'components/Button'
import PaymentItem from 'components/items/PaymentItem'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStackParamList } from 'types'

import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'Payment'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <Header>{'Оплата комунальних'}</Header>
    <PaymentSection />
    <Text style={styles.street}>{'Вулиця Лукаша, 54, 8'}</Text>
    <View style={styles.monthContainer}>
      <Image source={calendar} style={styles.calendarIcon} />
      <Text>{'Квітень 2021'}</Text>
      <Image source={arrowDown} style={styles.arrowDown} />
    </View>
    <PaymentItem />
    <PaymentItem />
    <PaymentItem />
    <PaymentItem />
    <Button onPress={() => navigate('CardPayment')}>{'Сплатити 583,60'}</Button>
  </ScrollView>
)

export default ContentView
