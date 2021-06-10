import React from 'react'
import { Text, View } from 'react-native'

import Form from './form'
import styles from './styles'

const ContentView = () => (
  <View style={styles.content}>
    <Text style={styles.title}>{'Платіжна картка:'}</Text>
    <Form />
  </View>
)

export default ContentView
