import Header from 'common/Header'
import MainMenuItems from 'components/MainMenuItems'
import PaymentHistoryItem from 'components/PaymentHistoryItem'
import colors from 'constants/colors'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const ContentView = () => (
  <ScrollView style={styles.page}>
    <Header>{'Привіт, Педро'}</Header>
    <View style={styles.paymentSection}>
      <LinearGradient
        colors={[colors.orangeWhite, colors.orangePeel, colors.transparent]}
        style={styles.payToContainer}
      >
        <Text style={styles.payToText}>{'Сплатити до:'}</Text>
        <Text style={styles.payDayText}>{'24'}</Text>
        <Text style={styles.payMonth}>{'Квітня'}</Text>
      </LinearGradient>
      <View style={styles.toPayContainer}>
        <Text style={styles.toPayText}>{'Всього до оплати:'}</Text>
        <Text style={styles.payAmount}>{'1250 UAH'}</Text>
        <View style={styles.payRateContainer}>
          <Text style={styles.payRate}>{'-20.30 UAH/-15%'}</Text>
        </View>
        <Text style={styles.lastMonth}>{'минулий місяць'}</Text>
      </View>
    </View>
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
