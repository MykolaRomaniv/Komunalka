import Header from 'common/Header'
import React from 'react'
import { View } from 'react-native'

import styles from './styles'

const ContentView = () => (
  <View style={styles.page}>
    <Header>{'Статистика'}</Header>
  </View>
)

export default ContentView
