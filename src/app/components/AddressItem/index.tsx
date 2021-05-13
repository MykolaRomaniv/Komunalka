import addressIcon from 'assets/icons/address.png'
import selectedAddress from 'assets/icons/selectedAddress.png'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

interface AddressItemProps {
  selected?: boolean
  address: string
  city: string
}

const AddressItem = ({ selected, address, city }: AddressItemProps) => (
  <View style={styles.container}>
    <Image
      source={selected ? selectedAddress : addressIcon}
      style={styles.icon}
    />
    <View>
      <Text style={styles.addressText}>{address}</Text>
      <Text style={styles.cityText}>{city}</Text>
    </View>
  </View>
)

export default AddressItem
