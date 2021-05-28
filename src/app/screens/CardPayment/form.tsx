import Input from 'components/Input'
import React from 'react'
import { View } from 'react-native'
import {
  CreditCardNumberValidate,
  expirityDateValidate,
  minLengthValidate,
  numberValidate,
} from 'services/validation'

import styles from './styles'

const Form = () => (
  <View>
    <Input
      label="Номер картки"
      placeholder="0000   0000   0000   0000"
      name="cardNumber"
      keyboardType="decimal-pad"
      type="creditCardNumber"
      validate={CreditCardNumberValidate}
      required
      underlineColor="transparent"
      style={styles.input}
    />
    {/* <Input label="Name of Card" placeholder="Enter Name" name="nameOfCard" /> */}
    <View style={styles.infoRow}>
      <Input
        label="Термін"
        placeholder="01 / 01"
        name="expiryDate"
        keyboardType="decimal-pad"
        type="expiryDate"
        required
        validate={expirityDateValidate}
        style={[styles.input, styles.rowItem]}
        underlineColor="transparent"
      />
      <Input
        label="CVC код"
        placeholder="CVS"
        name="securityCode"
        keyboardType="decimal-pad"
        type="password"
        maxLength={3}
        required
        validate={[numberValidate, minLengthValidate(3)]}
        style={[styles.input, styles.rowItem]}
        underlineColor="transparent"
      />
    </View>
  </View>
)

export default React.memo(Form)
