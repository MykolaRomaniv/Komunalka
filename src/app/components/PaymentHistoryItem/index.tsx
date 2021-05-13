import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const PaymentHistoryItem = () => (
  <View style={styles.paymentHistoryContainer}>
    <Text style={styles.bankName}>{'КФ ПАТ КБП”ПРИВАТБАНК”'}</Text>
    <View style={styles.columns}>
      <View>
        <Text style={styles.leftText}>{'Платник'}</Text>
        <Text style={styles.leftText}>{'Дата оплати'}</Text>
        <Text style={styles.leftText}>{'Дата обробки'}</Text>
      </View>
      <View>
        <Text style={styles.rightText}>{'Григорак Ілона Анатоліївна'}</Text>
        <Text style={styles.rightText}>{'20.04.2021'}</Text>
        <Text style={styles.rightText}>{'21.04.2021'}</Text>
      </View>
    </View>
  </View>
)

export default PaymentHistoryItem
