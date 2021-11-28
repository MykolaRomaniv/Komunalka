import payed from 'assets/payed.png'
import warningSign from 'assets/warningSign.png'
import PaymentSection from 'common/PaymentSection'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

interface ContentViewProps {
  isSuccessful?: boolean
}

const ContentView = ({ isSuccessful }: ContentViewProps) => (
  <View style={styles.screenContainer}>
    <PaymentSection />
    <View style={styles.screen}>
      {isSuccessful ? (
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
          <View style={styles.contentInner}>
            <Image source={warningSign} style={styles.warningSignIcon} />
            <Text style={[styles.title, styles.unsuccessfulTitle]}>
              {'Перевірте з’єднання '}
              {'з інтернетом'}
            </Text>
          </View>
        </View>
      )}
    </View>
  </View>
)

export default ContentView
