import pen from 'assets/icons/pen.png'
import Touchable from 'components/Touchable'
import colors from 'constants/colors'
import useToggle from 'hooks/useToggle'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

import styles from '../shared'

export interface PaymentItemProps {
  company: string
  utilityType: string
  personalAccount: string
  toPay: string
  wantToPay: string
  wilBePayed: string
}

const PaymentItem = ({
  company,
  utilityType,
  personalAccount,
  wantToPay,
  toPay,
  wilBePayed,
}: PaymentItemProps) => {
  const toggle = useToggle()

  return (
    <Touchable style={styles.container}>
      <View>
        <Text style={styles.organizationName}>{company}</Text>
        <Text style={styles.serviceName}>{utilityType}</Text>
        <Switch
          trackColor={{ true: colors.blueRibbon, false: '#767577' }}
          thumbColor={toggle.value ? colors.white : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggle.toggle}
          value={toggle.value}
        />
      </View>
      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={styles.leftText}>{'Особовий р-к'}</Text>
          <Text style={styles.leftText}>{'Показник від постачальника'}</Text>
          <Text style={styles.highlightText}>{'Сплачую'}</Text>
          <Text style={styles.leftText}>{'Нарахування'}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.rightText}>{personalAccount}</Text>
          <Text style={styles.rightText}>{toPay}</Text>
          <View style={styles.editableContainer}>
            <Text style={styles.newCounter}>{wantToPay}</Text>
            <Image source={pen} style={styles.penIcon} />
          </View>
          <Text style={styles.rightText}>{wilBePayed}</Text>
        </View>
      </View>
    </Touchable>
  )
}

export default PaymentItem
