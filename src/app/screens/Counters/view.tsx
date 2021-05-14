import arrowDown from 'assets/icons/arrowDown.png'
import calendar from 'assets/icons/calendar.png'
import Header from 'common/Header'
import PaymentSection from 'common/PaymentSection'
import CountersItem from 'components/CountersItem'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

const ContentView = () => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <Header>{'Показники лічильників'}</Header>
    <PaymentSection />
    <Text style={styles.street}>{'Вулиця Лукаша, 54, 8'}</Text>
    <View style={styles.monthContainer}>
      <Image source={calendar} style={styles.calendarIcon} />
      <Text>{'Квітень 2021'}</Text>
      <Image source={arrowDown} style={styles.arrowDown} />
    </View>
    <CountersItem />
    <CountersItem />
    <CountersItem />
    <CountersItem />
  </ScrollView>
)

export default ContentView
