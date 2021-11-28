import colors from 'constants/colors'
import React from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const PaymentSection = () => (
  <View style={styles.paymentSection}>
    <LinearGradient
      colors={[colors.orangePeel, colors.transparent]}
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
)

export default PaymentSection
