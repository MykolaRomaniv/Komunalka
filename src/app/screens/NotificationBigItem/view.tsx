import { StackNavigationProp } from '@react-navigation/stack'
import water from 'assets/icons/water.png'
import PaymentSection from 'common/PaymentSection'
import Button from 'components/Button'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStackParamList } from 'types'

import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'NotificationBigItem'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <PaymentSection />
    <View style={styles.container}>
      <View style={styles.conteinerHeader}>
        <Image source={water} style={styles.templateIcon} />
        <View style={styles.textWrapper}>
          <Text style={styles.company}>{'КП “Львівводоканал”'}</Text>
          <Text style={styles.description}>{'хол. вода і відведення'}</Text>
        </View>
      </View>
      <View style={styles.twoColumns}>
        <View>
          <Text>{'Тип платежу:'}</Text>
          <Text>{'Дата початку:'}</Text>
          <Text>{'Дата кінця:'}</Text>
          <Text>{'День місяця:'}</Text>
          <Text>{'Сума, грн'}</Text>
        </View>
        <View style={styles.secondColumn}>
          <Text>{'Щомісячний платіж'}</Text>
          <Text>{'28.05.2021'}</Text>
          <Text>{'28.05.2024'}</Text>
          <Text>{'15тий'}</Text>
          <Text>{'50'}</Text>
        </View>
      </View>
      <Button
        onPress={() =>
          navigate('NotificationsAndPayments', { notifications: true })
        }
      >
        {'Зберегти нагадування'}
      </Button>
    </View>
  </ScrollView>
)

export default ContentView
