// import bgGraph from 'assets/bgGraph.png'
import Header from 'common/Header'
import StatisticButton from 'components/StatisticButton'
import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const ContentView = () => (
  <View style={styles.page}>
    <Header>{'Статистика'}</Header>
    <View style={styles.graphContentWrapper}>
      <Text style={styles.rowTitle}>{'Комунальні послуги:'}</Text>
      <View style={styles.buttonRow}>
        <StatisticButton>{'Вода'}</StatisticButton>
        <StatisticButton selected>{'Світло'}</StatisticButton>
        <StatisticButton>{'Опалення'}</StatisticButton>
      </View>
      <Text style={styles.rowTitle}>{'Період:'}</Text>
      <View style={styles.buttonRow}>
        <StatisticButton>{'7 днів'}</StatisticButton>
        <StatisticButton selected>{'31 день'}</StatisticButton>
        <StatisticButton>{'12 місцяів'}</StatisticButton>
      </View>
      {/* <Image source={bgGraph} style={styles.bgGraph} /> */}
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
          <Text style={styles.difference}>{'Підвищення 10%'}</Text>
        </View>
      </View>
      <View />
    </View>
  </View>
)

export default ContentView
