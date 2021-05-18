import { StackNavigationProp } from '@react-navigation/stack'
import Header from 'common/Header'
import PaymentSection from 'common/PaymentSection'
import MainMenuItems from 'components/MainMenuItems'
import PaymentHistoryItem from 'components/PaymentHistoryItem'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStackParamList } from 'types'

import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'Main'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <Header>{'Привіт, Педро'}</Header>
    <PaymentSection />
    <View style={styles.menuItemsContainer}>
      <View style={styles.row}>
        <MainMenuItems
          title="Оплатити комуналку"
          onPress={() => navigate('Payment')}
        />
        <MainMenuItems title="Адреси" onPress={() => navigate('Addresses')} />
      </View>
      <View style={styles.row}>
        <MainMenuItems
          title="Статистика"
          onPress={() => navigate('Statistic')}
        />
        <MainMenuItems title="Нагадування" onPress={() => navigate('Main')} />
      </View>
    </View>
    <Text style={styles.paymentHistoryTitle}>{'Історія платежів:'}</Text>
    <PaymentHistoryItem />
    <PaymentHistoryItem />
    <PaymentHistoryItem />
    <PaymentHistoryItem />
  </ScrollView>
)

export default ContentView
