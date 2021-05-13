import pen from 'assets/icons/pen.png'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const CountersItem = () => (
  <View style={styles.container}>
    <Text style={styles.organizationName}>{'КП “Львівводоканал”'}</Text>
    <Text style={styles.serviceName}>{'хол. вода і відведення'}</Text>
    <View style={styles.columns}>
      <View style={styles.column}>
        <Text style={styles.leftText}>{'Особовий р-к'}</Text>
        <Text style={styles.leftText}>{'Показник від постачальника'}</Text>
        <Text style={styles.newCounterText}>{'Новий показник'}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.rightText}>{'670000080671'}</Text>
        <Text style={styles.rightText}>{'200,00'}</Text>
        <View style={styles.newCounterContainer}>
          <Text style={styles.newCounter}>{'54617'}</Text>
          <Image source={pen} style={styles.penIcon} />
        </View>
      </View>
    </View>
  </View>
)

export default CountersItem
