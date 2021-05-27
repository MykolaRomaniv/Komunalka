/* eslint-disable react/destructuring-assignment */
import { formatPhone, phoneMask } from 'constants/masks'
import useMaskedInput from 'hooks/useMaskedInput'
import React, { useEffect, useMemo } from 'react'
import { TextInput } from 'react-native'

import BaseInput, { IBaseInputProps } from './BaseInput'

type IProps = IBaseInputProps

const PhoneInput = (props: IProps, ref: React.Ref<TextInput>) => {
  const initial = useMemo(
    () =>
      (props.meta && props.meta.initial
        ? props.meta.initial.replace(/\D/g, '')
        : '') as string,
    [props.meta],
  )

  const [value, onChangeText, , setValue] = useMaskedInput(
    phoneMask,
    formatPhone,
    props.onChangeText,
    initial,
  )

  useEffect(() => {
    setValue(initial)
  }, [initial])

  return (
    <BaseInput
      {...props}
      keyboardType="phone-pad"
      value={value}
      onChangeText={(text: string) => {
        onChangeText(text)
        props.onChangeText?.(text)
      }}
      maxLength={20}
      ref={ref}
    />
  )
}

export default React.forwardRef<TextInput, IProps>(PhoneInput)
