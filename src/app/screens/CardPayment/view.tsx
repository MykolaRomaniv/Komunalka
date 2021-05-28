import payed from 'assets/payed.png'
import Header from 'common/Header'
import PaymentSection from 'common/PaymentSection'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Form from './form'
import styles from './styles'

interface ContentViewProps {
  save: () => void
  valid: boolean
  isPayed?: boolean
  sum: number
}

const ContentView = ({ save, valid, sum, isPayed }: ContentViewProps) => (
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={styles.screenContainer}
  >
    <Header>{'Оплата комунальних'}</Header>
    <PaymentSection />
    <View style={styles.screen}>
      {isPayed ? (
        <View style={styles.content}>
          <View style={styles.payedTitleWrapper}>
            <Text style={styles.title}>
              {'Комунальні послуги успішно сплачені'}
            </Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={payed} style={styles.payed} />
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>{'Платіжна картка:'}</Text>
          <Form />
          <Touchable
            onPress={save}
            disabled={!valid}
            style={[styles.submitButton, !valid && styles.disabledButton]}
          >
            <Text style={styles.submitText}>{`Сплатити ${sum}`}</Text>
          </Touchable>
        </View>
      )}
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
