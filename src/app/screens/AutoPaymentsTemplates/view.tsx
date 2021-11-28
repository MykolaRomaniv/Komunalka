import { StackNavigationProp } from '@react-navigation/stack'
import electricity from 'assets/icons/electricity.png'
import heat from 'assets/icons/heat.png'
import water from 'assets/icons/water.png'
import PaymentSection from 'common/PaymentSection'
import TemplateItem from 'components/TemplateItem'
import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStackParamList } from 'types'

import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'AutoPaymentsTemplates'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <ScrollView
    style={styles.page}
    contentContainerStyle={styles.contentContainer}
  >
    <PaymentSection />
    <Text style={styles.title}>{'Виберіть шаблон'}</Text>
    <TemplateItem
      company="КП “Львівводоканал”"
      description="хол. вода і відведення"
      icon={water}
      onPress={() => navigate('AutoPaymentBigItem')}
    />
    <TemplateItem
      company="КП “ЛьвівСвітло”"
      description="електропостачання"
      icon={electricity}
      onPress={() => navigate('AutoPaymentBigItem')}
    />
    <TemplateItem
      company="КП “ЛьвівГаз”"
      description="опалення"
      icon={heat}
      onPress={() => navigate('AutoPaymentBigItem')}
    />
  </ScrollView>
)

export default ContentView
