import facebook from 'assets/icons/facebook.png'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, Text, View } from 'react-native'
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
        <Text style={styles.title}>{'Komunalochka'}</Text>
        <Text style={styles.description}>
          {'твій менеджер комунальних послуг'}
        </Text>
        <Form />
        <Touchable
          onPress={save}
          disabled={!valid}
          style={[styles.submitButton, !valid && styles.disabledButton]}
        >
          <Text style={styles.submitText}>{'Увійти'}</Text>
        </Touchable>
        <View style={styles.divider} />
        <Touchable style={styles.facebookButton}>
          <Image source={facebook} style={styles.facebookIcon} />
          <Text style={styles.facebookText}>{'Facebook'}</Text>
        </Touchable>
      </View>
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
