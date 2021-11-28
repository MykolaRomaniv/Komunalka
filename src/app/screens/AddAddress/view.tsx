import addAddressBg from 'assets/addAddressBg.png'
import Button from 'components/Button'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Form from './form'
import styles from './styles'

interface ContentViewProps {
  onSave: () => void
}

const ContentView = ({ onSave }: ContentViewProps) => (
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={styles.screenContainer}
  >
    <View style={styles.screen}>
      <ImageBackground source={addAddressBg} style={styles.content}>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>{'Додавання адреси:'}</Text>
          <Form />
        </View>
        <Button onPress={onSave}>{'Додати адресу'}</Button>
      </ImageBackground>
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
