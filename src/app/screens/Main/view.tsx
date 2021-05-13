import Header from 'common/Header'
import PaymentSection from 'common/PaymentSection'
import MainMenuItems from 'components/MainMenuItems'
import PaymentHistoryItem from 'components/PaymentHistoryItem'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

const ContentView = () => (
  <ScrollView style={styles.page}>
    <Header>{'Привіт, Педро'}</Header>
    <PaymentSection />
    <View style={styles.menuItemsContainer}>
      <View style={styles.row}>
        <MainMenuItems title="Оплатити комуналку" />
        <MainMenuItems title="Адреси" />
      </View>
      <View style={styles.row}>
        <MainMenuItems title="Статистика" />
        <MainMenuItems title="Нагадування" />
      </View>
    </View>
    <Text style={styles.paymentHistoryTitle}>{'Історія платежів:'}</Text>
    <PaymentHistoryItem />
    <PaymentHistoryItem />
    <PaymentHistoryItem />
    <PaymentHistoryItem />
  </ScrollView>
)

export default ContentView
