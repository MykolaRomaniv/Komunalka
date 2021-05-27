import { useMemo, useState } from 'react'

const useMaskedInput = (
  mask: RegExp,
  formatValue: (text: string) => string,
  _onChangeText?: (text: string, rawText: string) => void,
  initValue = '',
): [
  string,
  (text: string) => void,
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [rawValue, setRawValue] = useState<string>(initValue)
  const formattedValue = useMemo(
    () => formatValue(rawValue),
    [rawValue, formatValue],
  )

  const onChangeText = (text: string) => {
    const oldFormatted = formatValue(rawValue)

    const newUnformatted = text.match(mask)

    if (newUnformatted) {
      const newRawValue = newUnformatted.reduce(
        (acc, val) => `${acc}${val}`,
        '',
      )
      if (rawValue !== newRawValue && rawValue.length !== newRawValue.length) {
        setRawValue(newRawValue)
        _onChangeText?.(formatValue(newRawValue), newRawValue)
      } else if (oldFormatted.slice(0, -1) === text) {
        const poppedRawValue = rawValue.slice(0, -1)
        setRawValue(poppedRawValue)
        _onChangeText?.(formatValue(poppedRawValue), poppedRawValue)
      }
    } else {
      setRawValue('')
      _onChangeText?.('', '')
    }
  }

  return [formattedValue, onChangeText, rawValue, setRawValue]
}

export default useMaskedInput
