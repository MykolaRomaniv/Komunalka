import selectedAddress from 'assets/icons/mapPinSelected.png'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { IAddressItem } from 'types'

import styles from './styles'

interface AddressItemProps {
  item: IAddressItem
}

const AddressItem = ({
  item: { city, street, homeNumber, corpus },
}: AddressItemProps) => (
  <View style={styles.container}>
    <Image source={selectedAddress} style={styles.icon} />
    <View>
      <Text style={styles.addressText}>
        {`Вулиця ${street}, ${homeNumber}, ${corpus}`}
      </Text>
      <Text style={styles.cityText}>{city}</Text>
    </View>
  </View>
)

export default AddressItem
