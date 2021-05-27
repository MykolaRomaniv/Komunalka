import Input from 'components/Input'
import React from 'react'
import { View } from 'react-native'
import {
  CreditCardNumberValidate,
  expirityDateValidate,
  minLengthValidate,
  numberValidate,
} from 'services/validation'

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
    />
    {/* <Input label="Name of Card" placeholder="Enter Name" name="nameOfCard" /> */}
    <View>
      <Input
        label="Термін"
        placeholder="01 / 01"
        name="expiryDate"
        keyboardType="decimal-pad"
        type="expiryDate"
        required
        validate={expirityDateValidate}
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
      />
    </View>
  </View>
)

export default React.memo(Form)
