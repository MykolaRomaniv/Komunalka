import pen from 'assets/icons/pen.png'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from '../shared'

const CountersItem = () => (
  <Touchable style={styles.container}>
    <View>
      <Text style={styles.organizationName}>{'КП “Львівводоканал”'}</Text>
      <Text style={styles.serviceName}>{'хол. вода і відведення'}</Text>
    </View>
    <View style={styles.columns}>
      <View style={styles.column}>
        <Text style={styles.leftText}>{'Особовий р-к'}</Text>
        <Text style={styles.leftText}>{'Показник від постачальника'}</Text>
        <Text style={styles.highlightText}>{'Новий показник'}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.rightText}>{'670000080671'}</Text>
        <Text style={styles.rightText}>{'200,00'}</Text>
        <View style={styles.editableContainer}>
          <Text style={styles.newCounter}>{'54617'}</Text>
          <Image source={pen} style={styles.penIcon} />
        </View>
      </View>
    </View>
  </Touchable>
)

export default CountersItem
