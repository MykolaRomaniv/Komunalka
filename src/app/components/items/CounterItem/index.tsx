import pen from 'assets/icons/pen.png'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ICounterItem } from 'types'

import styles from '../shared'

interface CountersItemProps {
  item: ICounterItem
}

const CountersItem = ({
  item: {
    companyName,
    utilityType,
    personalAccount,
    counterState,
    newCounterState,
  },
}: CountersItemProps) => (
  <Touchable style={styles.container}>
    <View>
      <Text style={styles.organizationName}>{companyName}</Text>
      <Text style={styles.serviceName}>{utilityType}</Text>
    </View>
    <View style={styles.columns}>
      <View style={styles.column}>
        <Text style={styles.leftText}>{'Особовий р-к'}</Text>
        <Text style={styles.leftText}>{'Показник від постачальника'}</Text>
        <Text style={styles.highlightText}>{'Новий показник'}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.rightText}>{personalAccount}</Text>
        <Text style={styles.rightText}>{counterState}</Text>
        <View style={styles.editableContainer}>
          <Text style={styles.newCounter}>{newCounterState}</Text>
          <Image source={pen} style={styles.penIcon} />
        </View>
      </View>
    </View>
  </Touchable>
)

export default CountersItem
