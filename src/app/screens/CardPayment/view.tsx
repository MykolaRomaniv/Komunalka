import Touchable from 'components/Touchable'
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
  <KeyboardAwareScrollView bounces={false}>
    <View style={styles.content}>
      <Text style={styles.title}>{'Інформація про платіж:'}</Text>
      <Form />
      <Touchable
        onPress={save}
        disabled={!valid}
        style={[styles.submitButton, !valid && styles.disabledButton]}
      >
        <Text style={styles.submitText}>{`Сплатити ${sum}`}</Text>
      </Touchable>
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
