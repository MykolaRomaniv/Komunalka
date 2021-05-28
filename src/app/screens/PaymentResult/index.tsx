import { StackScreenProps } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStackParamList } from 'types'

import ContentView from './view'

type PaymentResultProps = StackScreenProps<AppStackParamList, 'PaymentResult'>

const PaymentResult = ({ navigation, route }: PaymentResultProps) => {
  const { params } = route
  return (
    <SafeAreaView>
      <ContentView isSuccessful={params?.isSuccessful} />
      <FooterMenu navigation={navigation} />
    </SafeAreaView>
  )
}

export default PaymentResult
