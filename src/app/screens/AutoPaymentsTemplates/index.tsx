import { StackNavigationProp } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

interface NotificationTemplatesProps {
  navigation: StackNavigationProp<AppStackParamList, 'AutoPaymentsTemplates'>
}

const NotificationTemplates = ({ navigation }: NotificationTemplatesProps) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header navigation={navigation}>{'Оплата комунальних'}</Header>
    <ContentView navigation={navigation} />
    <FooterMenu navigation={navigation} />
  </SafeAreaView>
)

export default NotificationTemplates
