import email from 'assets/icons/email.png'
import lock from 'assets/icons/lock.png'
import lockOpen from 'assets/icons/lockOpen.png'
import userFilled from 'assets/icons/userFilled.png'
import userOutlined from 'assets/icons/userOutlined.png'
import Input from 'components/Input'
import { minPasswordLen } from 'constants/index'
import React from 'react'
import { Image } from 'react-native'
import { Validator } from 'redux-form'
import { emailValidate, minLengthValidate } from 'services/validation'

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
      right={<Image source={email} style={styles.rightIcon} />}
      required
    />
    <Input
      name="name"
      label="Ім’я"
      placeholder="Введіть ваше ім'я"
      style={styles.input}
      right={<Image source={userOutlined} style={styles.rightIcon} />}
      required
    />
    <Input
      name="familyName"
      label="Фамілія"
      placeholder="Введіть вашу фамілію"
      style={styles.input}
      right={<Image source={userFilled} style={styles.rightIcon} />}
      required
    />
    <Input
      name="password"
      label="Пароль"
      placeholder="Введіть пароль"
      style={styles.input}
      type="password"
      validate={lengthValidate}
      right={<Image source={lock} style={styles.rightIcon} />}
      required
    />
    <Input
      name="confirmPassword"
      label="Підтвердіть пароль"
      placeholder="Підтвердіть пароль"
      style={styles.input}
      type="password"
      validate={confirmPasswordValidate}
      right={<Image source={lockOpen} style={styles.rightIcon} />}
      required
    />
  </>
)

export default React.memo(Form)
