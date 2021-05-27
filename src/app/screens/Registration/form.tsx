import email from 'assets/icons/email.png'
import Input from 'components/Input'
import { minPasswordLen } from 'constants/index'
import React from 'react'
import { Image } from 'react-native'
import { Validator } from 'redux-form'
import { phoneNormalize } from 'services/normalize'
import {
  emailValidate,
  minLengthValidate,
  phoneValidate,
} from 'services/validation'

import IFormData from './IFormData.d'
import styles from './styles'

const lengthValidate = minLengthValidate(minPasswordLen)
const confirmPasswordValidate: Validator = (
  value: string,
  allValues: IFormData,
) =>
  !value || value.localeCompare(allValues.password) === 0
    ? undefined
    : "Password doesn't match"

const Form = () => (
  <>
    <Input
      name="email"
      label="Емейл адреса"
      placeholder="komunalshik@gmail.com"
      keyboardType="email-address"
      validate={emailValidate}
      style={styles.input}
      autoCapitalize="none"
      required
      right={<Image source={email} style={styles.rightIcon} />}
    />
    <Input
      name="name"
      label="Ім’я"
      placeholder="Введіть ваше ім'я"
      style={styles.input}
      required
    />
    <Input
      name="familyName"
      label="Фамілія"
      placeholder="Введіть вашу фамілію"
      style={styles.input}
      required
    />
    <Input
      name="phoneNumber"
      label="Phone number"
      type="telephoneNumber"
      placeholder="Enter your phone"
      validate={phoneValidate}
      normalize={phoneNormalize}
      style={styles.input}
      required
    />
    <Input
      name="newPassword"
      label="Пароль"
      placeholder="Введіть пароль"
      style={styles.input}
      type="password"
      validate={lengthValidate}
    />
    <Input
      name="confirmPassword"
      label="Підтвердіть пароль"
      placeholder="Підтвердіть пароль"
      style={styles.input}
      type="password"
      validate={confirmPasswordValidate}
    />
  </>
)

export default React.memo(Form)
