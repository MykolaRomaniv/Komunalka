import React from 'react'
import {
  LayoutChangeEvent,
  SafeAreaView,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native'
import { CodeField, Cursor } from 'react-native-confirmation-code-field'
import { HelperText } from 'react-native-paper'
import { WrappedFieldMetaProps } from 'redux-form'

import styles from './styles'

interface IProps extends TextInputProps {
  onChangeText?: (text: string) => void
  style?: StyleProp<TextStyle>
  meta?: WrappedFieldMetaProps

  value?: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  cellCount: number
  getCellOnLayoutHandler: (index: number) => (event: LayoutChangeEvent) => void
  hasError: boolean
  inputProps: Record<string, unknown>
}

const view = (
  {
    style,
    value,
    setValue,
    onChangeText,
    cellCount,
    getCellOnLayoutHandler,
    meta,
    hasError,
    inputProps,
  }: IProps,
  ref: React.Ref<TextInput>,
) => (
  <SafeAreaView style={[styles.containerStyle, style]}>
    <CodeField
      ref={ref}
      {...inputProps}
      value={value}
      onChangeText={(value) => {
        setValue(value)
        onChangeText?.(value)
      }}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View
          onLayout={getCellOnLayoutHandler(index)}
          key={index}
          style={[styles.cellRoot, isFocused && styles.focusCell]}
        >
          <Text style={styles.cellText}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
    <HelperText type="error" visible={hasError}>
      {meta?.error}
    </HelperText>
  </SafeAreaView>
)

export default React.forwardRef<TextInput, IProps>(view)
