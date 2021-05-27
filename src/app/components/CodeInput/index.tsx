import React, { useState } from 'react'
import { StyleProp, TextInputProps, TextStyle } from 'react-native'
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import { WrappedFieldMetaProps } from 'redux-form'

import ContentView from './view'

interface IProps extends TextInputProps {
  onChangeText?: (text: string) => void
  style?: StyleProp<TextStyle>
  meta?: WrappedFieldMetaProps
}

const CELL_COUNT = 4

const UnderlineExample: React.FC<IProps> = ({ onChangeText, style, meta }) => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [inputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  const hasError = !!meta?.error && meta?.touched

  return (
    <ContentView
      onChangeText={onChangeText}
      style={style}
      meta={meta}
      value={value}
      ref={ref}
      setValue={setValue}
      cellCount={CELL_COUNT}
      getCellOnLayoutHandler={getCellOnLayoutHandler}
      hasError={hasError}
      inputProps={inputProps}
    />
  )
}

export default UnderlineExample
