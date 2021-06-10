import Input from 'components/Input'
import React from 'react'
import { View } from 'react-native'
import { numberValidate } from 'services/validation'

import styles from './styles'

const Form = () => (
  <>
    <View style={styles.firstRow}>
      <Input
        name="state"
        label="Область"
        placeholder="Львівська"
        required
        style={styles.state}
      />
      <Input
        name="city"
        label="Місто"
        placeholder="Львів"
        required
        style={styles.city}
      />
    </View>
    <Input
      name="street"
      label="Вулиця"
      placeholder="303 Meadowview Drive"
      required
    />
    <View style={styles.secondRow}>
      <Input
        name="corpus"
        placeholder="24175"
        label="Корпус"
        style={styles.corpus}
        validate={numberValidate}
      />
      <Input
        name="homeNumber"
        placeholder="89"
        label="Квартира"
        style={styles.homeNumber}
        validate={numberValidate}
        required
      />
    </View>
  </>
)

export default React.memo(Form)
