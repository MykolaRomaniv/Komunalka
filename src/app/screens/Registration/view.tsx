import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Form from './form'
import styles from './styles'

interface ContentViewProps {
  save: () => void
  valid: boolean
}

const ContentView = ({ save, valid }: ContentViewProps) => (
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={styles.screenContainer}
  >
    <View style={styles.screen}>
      <View style={styles.content}>
        <Form />
        <TouchableOpacity onPress={save} disabled={!valid} activeOpacity={0.7}>
          <Text style={styles.submitText}>{'Save'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
