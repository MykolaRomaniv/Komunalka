/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import CodeInput from 'components/CodeInput'
import colors from 'constants/colors'
import React from 'react'
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { compose } from 'redux'
import {
  Field,
  Normalizer,
  Validator,
  WrappedFieldInputProps,
  WrappedFieldMetaProps,
} from 'redux-form'
import { getDefaultNormalize } from 'services/normalize'
import { requiredValidate } from 'services/validation'
import { TextContentType } from 'types'

import BaseInput from './BaseInput'
import CreditCardInput from './creditCardInput'
import ExpiryDateInput from './expiryDateInput'
import PhoneInput from './phoneInput'
import styles from './styles'

interface IProps extends TextInputProps {
  placeholder?: string
  label?: string
  name: string
  keyboardType?: KeyboardTypeOptions
  type?: TextContentType
  style?: StyleProp<TextStyle>
  validate?: Validator | Validator[]
  normalize?: Normalizer
  required?: boolean
  error?: string
  editable?: boolean
  right?: React.ReactNode
  mode?: 'flat' | 'outlined'
  maxLength?: number
  underlineColor?: string
  useNativeInput?: boolean
  disableError?: boolean
}

interface IPropsWithRef extends IProps {
  forwardRef: React.Ref<TextInput>
}

interface IInput {
  input: WrappedFieldInputProps
  meta: WrappedFieldMetaProps
}

class Form extends React.Component<IPropsWithRef> {
  renderInput = ({
    input: { onChange, onBlur, onFocus, ...restInput },
    meta,
  }: IInput) => {
    const inputProps = {
      ...restInput,
      ...this.props,
      style: [styles.input, this.props.style] as StyleProp<ViewStyle>,
      placeholderTextColor: colors.textGray,
      placeholder: this.props.placeholder,
      label: this.props.label,
      keyboardType: this.props.keyboardType || 'default',
      secureTextEntry:
        this.props.type === 'password' || this.props.type === 'newPassword',
      textContentType:
        this.props.type === 'expiryDate' || !this.props.type
          ? 'none'
          : this.props.type,
      meta: { ...meta, error: this.props.error || meta.error },
      maxLength: this.props.maxLength,
      editable: this.props.editable,
      right: this.props.right,
      mode: this.props.mode,
      onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        onChange(e)
        this.props.onChange?.(e)
      },
      onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur(e)
        this.props.onBlur?.(e)
      },
      onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        this.props.onFocus?.(e)
      },
      ref: this.props.forwardRef,
    }

    return this.props.type === 'telephoneNumber' ? (
      <PhoneInput {...inputProps} />
    ) : this.props.type === 'oneTimeCode' ? (
      <CodeInput onChangeText={onChange} style={this.props.style} meta={meta} />
    ) : this.props.type === 'creditCardNumber' ? (
      <CreditCardInput {...inputProps} />
    ) : this.props.type === 'expiryDate' ? (
      <ExpiryDateInput {...inputProps} />
    ) : (
      <BaseInput {...inputProps} />
    )
  }

  render() {
    const customValidators = this.props.validate
      ? Array.isArray(this.props.validate)
        ? this.props.validate
        : [this.props.validate]
      : []

    const validate = this.props.required
      ? [requiredValidate, ...customValidators]
      : customValidators

    const normalize =
      this.props.normalize || getDefaultNormalize(this.props.type || 'none')

    return (
      <Field
        name={this.props.name}
        component={this.renderInput}
        validate={validate}
        normalize={normalize}
      />
    )
  }
}

const InputWithRef = (props: IProps, ref: React.Ref<TextInput>) => (
  <Form {...props} forwardRef={ref} />
)

export default compose<
  React.ForwardRefExoticComponent<IProps & React.RefAttributes<TextInput>>
>(
  React.memo,
  React.forwardRef,
)(InputWithRef)
