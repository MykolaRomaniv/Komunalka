import PaymentSection from 'common/PaymentSection'
import Button from 'components/Button'
import React from 'react'
import { Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Form from './form'
import styles from './styles'

interface ContentViewProps {
  save: () => void
  valid: boolean
  sum: number
}

const ContentView = ({ save, valid, sum }: ContentViewProps) => (
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={styles.screenContainer}
  >
    <PaymentSection />
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>{'Платіжна картка:'}</Text>
        <Form />
        <Button disabled={!valid} onPress={save}>{`Сплатити ${sum.toFixed(
          2,
        )}`}</Button>
      </View>
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
