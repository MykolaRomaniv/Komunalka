import Input from 'components/Input'
import React from 'react'
import { phoneNormalize } from 'services/normalize'
import { emailValidate, phoneValidate } from 'services/validation'

import styles from './styles'

const Form = () => (
  <>
    <Input
      name="name"
      label="First Name"
      placeholder="Enter your name"
      style={styles.input}
    />
    <Input
      name="familyName"
      label="Last Name"
      placeholder="Enter your surname"
      style={styles.input}
    />
    <Input
      name="phoneNumber"
      label="Phone number"
      type="telephoneNumber"
      placeholder="Enter your phone"
      validate={phoneValidate}
      normalize={phoneNormalize}
      style={styles.input}
    />
    <Input
      name="email"
      label="Email"
      placeholder="Enter email"
      keyboardType="email-address"
      validate={emailValidate}
      style={styles.input}
    />
  </>
)

export default React.memo(Form)
