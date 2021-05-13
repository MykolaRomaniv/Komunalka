import graph from 'assets/icons/graph.png'
import home from 'assets/icons/home.png'
import address from 'assets/icons/menuAddress.png'
import notification from 'assets/icons/notification.png'
import person from 'assets/icons/person.png'
import FooterItem from 'components/FooterItem'
import React from 'react'
import { View } from 'react-native'

import styles from './styles'

const FooterMenu = () => (
  <View style={styles.footerMenu}>
    <FooterItem
      icon={home}
      iconStyle={styles.homeIcon}
      text="Головна"
      selected
    />
    <FooterItem icon={graph} iconStyle={styles.graphIcon} text="Статистика" />
    <FooterItem
      icon={notification}
      iconStyle={styles.notificationIcon}
      text="Нагадування"
    />
    <FooterItem icon={address} iconStyle={styles.addressIcon} text="Адреси" />
    <FooterItem icon={person} iconStyle={styles.personIcon} text="Лічильники" />
  </View>
)

export default FooterMenu
