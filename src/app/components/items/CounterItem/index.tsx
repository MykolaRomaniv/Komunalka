import pen from 'assets/icons/pen.png'
import Touchable from 'components/Touchable'
import colors from 'constants/colors'
import useToggle from 'hooks/useToggle'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'

import styles from './styles'

interface CountersItemProps {
  isPayment?: boolean
}

const CountersItem = ({ isPayment }: CountersItemProps) => {
  const toggle = useToggle()

  return (
    <Touchable style={styles.container}>
      <View>
        <Text style={styles.organizationName}>{'КП “Львівводоканал”'}</Text>
        <Text style={styles.serviceName}>{'хол. вода і відведення'}</Text>
        {isPayment && (
          <Switch
            trackColor={{ true: colors.blueRibbon, false: '#767577' }}
            thumbColor={toggle.value ? colors.white : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggle.toggle}
            value={toggle.value}
          />
        )}
      </View>
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
    </Touchable>
  )
}

export default CountersItem
