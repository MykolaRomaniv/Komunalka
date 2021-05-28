import colors from 'constants/colors'
import React from 'react'
import {
  StyleProp,
  TextInput as NativeTextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'
import { WrappedFieldMetaProps } from 'redux-form'

import styles, { theme } from './styles'

interface IProps extends TextInputProps {
  accessibilityStates?: unknown
  label?: string
  style?: StyleProp<ViewStyle>
  mode?: 'flat' | 'outlined'
  meta?: WrappedFieldMetaProps
  editable?: boolean
  right?: React.ReactNode
  underlineColor?: string
  useNativeInput?: boolean
  disableError?: boolean
}

const BaseInput = (
  {
    mode = 'flat',
    style,
    meta,
    editable = true,
    right,
    underlineColor = colors.borderGray,
    useNativeInput = false,
    disableError = false,
    ...props
  }: IProps,
  ref: React.Ref<NativeTextInput>,
) => {
  const hasError = !!meta?.error && meta?.touched
  return (
    <View style={style}>
      <View style={styles.inputContainer}>
        {useNativeInput ? (
          <NativeTextInput
            style={[styles.input, !!right && styles.inputWithRight]}
            ref={ref}
            editable={editable}
            defaultValue={meta?.initial}
            selectionColor={colors.dodgerBlue}
            {...props}
          />
        ) : (
          <TextInput
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            selectionColor={colors.dodgerBlue}
            mode={mode}
            theme={theme}
            style={[styles.input, !!right && styles.inputWithRight]}
            error={hasError}
            underlineColor={underlineColor}
            underlineColorAndroid={underlineColor}
            defaultValue={meta?.initial}
            editable={editable}
            ref={ref}
            {...props}
          />
        )}
        {right ? <View style={styles.right}>{right}</View> : null}
      </View>
      {disableError ? null : (
        <HelperText type="error" visible={hasError}>
          {meta?.error}
        </HelperText>
      )}
    </View>
  )
}
export type IBaseInputProps = IProps

export default React.forwardRef<NativeTextInput, IProps>(BaseInput)
