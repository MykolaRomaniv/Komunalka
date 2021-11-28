import Chart from 'assets/Chart.png'
import Chart1 from 'assets/Chart1.png'
import Chart2 from 'assets/Chart2.png'
import arrowUpRed from 'assets/icons/arrowUpRed.png'
import StatisticButton from 'components/StatisticButton'
import useToggle from 'hooks/useToggle'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const ContentView = () => {
  const day7 = useToggle(true)
  const day31 = useToggle()
  const month12 = useToggle()

  const offAll = () => {
    day31.off()
    day7.off()
    month12.off()
  }

  const getChart = () => {
    if (day7.value) {
      return Chart1
    }
    if (day31.value) {
      return Chart2
    }
    if (month12.value) {
      return Chart
    }
    return undefined
  }

  return (
    <View style={styles.page}>
      <View style={styles.graphContentWrapper}>
        <Text style={styles.rowTitle}>{'Комунальні послуги:'}</Text>
        <View style={styles.buttonRow}>
          <StatisticButton selected>{'Вода'}</StatisticButton>
          <StatisticButton>{'Світло'}</StatisticButton>
          <StatisticButton>{'Опалення'}</StatisticButton>
        </View>
        <Text style={styles.rowTitle}>{'Період:'}</Text>
        <View style={styles.buttonRow}>
          <StatisticButton
            onPress={() => {
              offAll()
              day7.on()
            }}
            selected={day7.value}
          >
            {'7 днів'}
          </StatisticButton>
          <StatisticButton
            onPress={() => {
              offAll()
              day31.on()
            }}
            selected={day31.value}
          >
            {'31 день'}
          </StatisticButton>
          <StatisticButton
            onPress={() => {
              offAll()
              month12.on()
            }}
            selected={month12.value}
          >
            {'12 місцяів'}
          </StatisticButton>
        </View>
        <Image source={getChart()} style={styles.chart} resizeMode="stretch" />
      </View>
      <View style={styles.banner}>
        <Text style={styles.month}>{'Березень 2021'}</Text>
        <View style={styles.horizontalDivider} />
        <View style={styles.serviceRow}>
          <Text style={styles.serviceType}>{'Вода'}</Text>
          <View />
          <View>
            <View style={styles.amountRow}>
              <Text style={styles.amount}>{'233'}</Text>
              <Text style={styles.currency}>{'ГРН'}</Text>
            </View>
            <View style={styles.upDownRow}>
              <Image source={arrowUpRed} style={styles.arrowUpRed} />
              <Text style={styles.difference}>{'Підвищення 10%'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.serviceFooter} />
      </View>
    </View>
  )
}

export default ContentView
