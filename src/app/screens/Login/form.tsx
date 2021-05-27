import email from 'assets/icons/email.png'
import lock from 'assets/icons/lock.png'
import Input from 'components/Input'
import { minPasswordLen } from 'constants/index'
import React from 'react'
import { Image } from 'react-native'
import { emailValidate, minLengthValidate } from 'services/validation'

import styles from './styles'

const lengthValidate = minLengthValidate(minPasswordLen)

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
      name="password"
      label="Пароль"
      placeholder="Введіть пароль"
      style={styles.input}
      type="password"
      validate={lengthValidate}
      right={<Image source={lock} style={styles.rightIcon} />}
      required
    />
  </>
)

export default React.memo(Form)
