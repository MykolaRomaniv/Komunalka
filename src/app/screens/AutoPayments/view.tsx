import { StackNavigationProp } from '@react-navigation/stack'
import NoPayments from 'common/NoPayments'
import PaymentSection from 'common/PaymentSection'
import NotificationItem from 'components/NotificationItem'
import Touchable from 'components/Touchable'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStackParamList, INotification } from 'types'

import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'AutoPayments'>
  notifications: INotification[]
}

const ContentView = ({
  navigation: { navigate },
  notifications,
}: ContentViewProps) => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <PaymentSection />
    <Text style={styles.title}>{'Нагадування'}</Text>
    <View style={styles.tabView}>
      <View style={[styles.tab, styles.selected]}>
        <Touchable>
          <Text>{'Автоплатежі'}</Text>
        </Touchable>
      </View>
      <View style={styles.tab}>
        <Touchable>
          <Text>{'Нагадування'}</Text>
        </Touchable>
      </View>
    </View>
    {notifications.length ? (
      notifications.map((item, i) => (
        <NotificationItem
          body={item.body}
          company={item.company}
          description={item.description}
          icon={item.icon}
          sum={item.sum}
          key={i}
        />
      ))
    ) : (
      <NoPayments onButtonPress={() => navigate('AutoPaymentsTemplates')} />
    )}
  </ScrollView>
)

export default ContentView
