import address from 'assets/icons/address.png'
import graph from 'assets/icons/graph.png'
import home from 'assets/icons/home.png'
import notification from 'assets/icons/notification.png'
import person from 'assets/icons/person.png'
import React from 'react'
import { Image, Text, View } from 'react-native'

const FooterMenu = () => (
  <View>
    <View>
      <Image source={home} />
      <Text>{'Головна'}</Text>
    </View>
    <View>
      <Image source={graph} />
      <Text>{'Статистика'}</Text>
    </View>
    <View>
      <Image source={notification} />
      <Text>{'Нагадування'}</Text>
    </View>
    <View>
      <Image source={address} />
      <Text>{'Адреси'}</Text>
    </View>
    <View>
      <Image source={person} />
      <Text>{'Лічильники'}</Text>
    </View>
  </View>
)

export default FooterMenu
