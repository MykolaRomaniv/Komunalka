import arrowDown from 'assets/icons/arrowDown.png'
import calendar from 'assets/icons/calendar.png'
import PaymentSection from 'common/PaymentSection'
import Button from 'components/Button'
import CountersItem from 'components/items/CounterItem'
import { COUNTERS } from 'constants/exampleData'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

interface ContentViewProps {
  onSendPress: () => void
}

const ContentView = ({ onSendPress }: ContentViewProps) => (
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
    {COUNTERS.map((item) => (
      <CountersItem key={item.personalAccount} item={item} />
    ))}
    <Button onPress={onSendPress}>{'Надіслати'}</Button>
  </ScrollView>
)

export default ContentView
