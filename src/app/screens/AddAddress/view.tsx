import { StackNavigationProp } from '@react-navigation/stack'
import addAddressBg from 'assets/addAddressBg.png'
import Header from 'common/Header'
import Button from 'components/Button'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AppStackParamList } from 'types'

import Form from './form'
import styles from './styles'

interface ContentViewProps {
  navigation: StackNavigationProp<AppStackParamList, 'AddAddress'>
}

const ContentView = ({ navigation: { navigate } }: ContentViewProps) => (
  <KeyboardAwareScrollView
    bounces={false}
    contentContainerStyle={styles.screenContainer}
  >
    <View style={styles.screen}>
      <Header>{'Адреси'}</Header>
      <ImageBackground source={addAddressBg} style={styles.content}>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>{'Додавання адреси:'}</Text>
          <Form />
        </View>
        <Button onPress={() => navigate('Addresses')}>{'Додати адресу'}</Button>
      </ImageBackground>
    </View>
  </KeyboardAwareScrollView>
)

export default ContentView
