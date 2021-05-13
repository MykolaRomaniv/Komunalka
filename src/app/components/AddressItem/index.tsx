import addressIcon from 'assets/icons/address.png'
import selectedAddress from 'assets/icons/selectedAddress.png'
import Touchable from 'components/Touchable'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

interface AddressItemProps {
  selected?: boolean
  address: string
  city: string
}

const AddressItem = ({ selected, address, city }: AddressItemProps) => (
  <Touchable style={styles.container} activeOpacity={0.87}>
    <Image
      source={selected ? selectedAddress : addressIcon}
      style={styles.icon}
    />
    <View>
      <Text style={styles.addressText}>{address}</Text>
      <Text style={styles.cityText}>{city}</Text>
    </View>
  </Touchable>
)

export default AddressItem
