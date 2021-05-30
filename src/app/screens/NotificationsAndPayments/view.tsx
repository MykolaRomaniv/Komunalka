import Header from 'common/Header'
import NoNotifications from 'common/NoNotifications'
import PaymentSection from 'common/PaymentSection'
import Touchable from 'components/Touchable'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles'

const ContentView = () => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <Header>{'Оплата комунальних'}</Header>
    <PaymentSection />
    <Text style={styles.title}>{'Нагадування'}</Text>
    <View style={styles.tabView}>
      <View style={styles.tab}>
        <Touchable>
          <Text>{'Автоплатежі'}</Text>
        </Touchable>
      </View>
      <View style={[styles.tab, styles.selected]}>
        <Touchable>
          <Text>{'Нагадування'}</Text>
        </Touchable>
      </View>
    </View>
    <NoNotifications />
  </ScrollView>
)

export default ContentView
