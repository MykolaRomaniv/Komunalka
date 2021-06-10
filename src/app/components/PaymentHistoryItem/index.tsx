import Touchable from 'components/Touchable'
import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export interface PaymentHistoryItemProps {
  bankName: string
  payer: string
  paymentDate: string
  processDate: string
}

const PaymentHistoryItem = ({
  bankName,
  payer,
  paymentDate,
  processDate,
}: PaymentHistoryItemProps) => (
  <Touchable style={styles.paymentHistoryContainer}>
    <Text style={styles.bankName}>{bankName}</Text>
    <View style={styles.columns}>
      <View>
        <Text style={styles.leftText}>{'Платник'}</Text>
        <Text style={styles.leftText}>{'Дата оплати'}</Text>
        <Text style={styles.leftText}>{'Дата обробки'}</Text>
      </View>
      <View>
        <Text style={styles.rightText}>{payer}</Text>
        <Text style={styles.rightText}>{paymentDate}</Text>
        <Text style={styles.rightText}>{processDate}</Text>
      </View>
    </View>
  </Touchable>
)

export default PaymentHistoryItem
