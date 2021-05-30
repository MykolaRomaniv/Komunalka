import selectedAddress from 'assets/icons/mapPinSelected.png'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

interface AddressItemProps {
  address: string
  city: string
}

const AddressItem = ({ address, city }: AddressItemProps) => (
  <View style={styles.container}>
    <Image source={selectedAddress} style={styles.icon} />
    <View>
      <Text style={styles.addressText}>{address}</Text>
      <Text style={styles.cityText}>{city}</Text>
    </View>
  </View>
)

export default AddressItem
