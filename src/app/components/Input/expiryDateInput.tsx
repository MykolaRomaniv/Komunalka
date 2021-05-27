/* eslint-disable react/destructuring-assignment */
import { expiryDateMask, formatExpiryDate } from 'constants/masks'
import useMaskedInput from 'hooks/useMaskedInput'
import React from 'react'

import BaseInput, { IBaseInputProps } from './BaseInput'

type IProps = IBaseInputProps

const CreditCardInput: React.FC<IProps> = (props) => {
  const [value, onChangeText] = useMaskedInput(
    expiryDateMask,
    formatExpiryDate,
    props.onChangeText,
  )
  return (
    <BaseInput
      {...props}
      value={value}
      onChangeText={onChangeText}
      maxLength={7}
    />
  )
}

export default CreditCardInput
