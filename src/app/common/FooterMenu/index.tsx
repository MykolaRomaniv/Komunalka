import { StackNavigationProp } from '@react-navigation/stack'
import graph from 'assets/icons/graph.png'
import home from 'assets/icons/home.png'
import address from 'assets/icons/menuAddress.png'
import notification from 'assets/icons/notification.png'
import person from 'assets/icons/person.png'
import FooterItem from 'components/FooterItem'
import React from 'react'
import { View } from 'react-native'
import { AppStackParamList } from 'types'

import styles from './styles'

interface FooterMenuProps {
  navigation: StackNavigationProp<AppStackParamList, keyof AppStackParamList>
}

const FooterMenu = ({ navigation: { navigate } }: FooterMenuProps) => (
  <View style={styles.footerMenu}>
    <FooterItem
      icon={home}
      iconStyle={styles.homeIcon}
      text="Головна"
      selected
      onPress={() => navigate('Main')}
    />
    <FooterItem
      icon={graph}
      iconStyle={styles.graphIcon}
      text="Статистика"
      onPress={() => navigate('Statistic')}
    />
    <FooterItem
      icon={notification}
      iconStyle={styles.notificationIcon}
      text="Нагадування"
      onPress={() => navigate('Main')}
    />
    <FooterItem
      icon={address}
      iconStyle={styles.addressIcon}
      text="Адреси"
      onPress={() => navigate('Addresses')}
    />
    <FooterItem
      icon={person}
      iconStyle={styles.personIcon}
      text="Лічильники"
      onPress={() => navigate('Counters')}
    />
  </View>
)

export default FooterMenu
