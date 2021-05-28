import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'
import { Theme } from 'react-native-paper/src/types'
import { DeepPartial } from 'redux'

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
  },
  input: {
    ...fonts.medium,
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'left',
    opacity: 0.8,
    color: colors.black,

    backgroundColor: 'transparent',
    flex: 1,
  },
  inputWithRight: {
    paddingRight: 20,
  },
  right: {
    position: 'absolute',
    right: 0,
    height: '100%',
    minWidth: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const theme: DeepPartial<Theme> = {
  colors: {
    text: colors.black,
    primary: colors.black,
    placeholder: colors.textGray,
  },

  roundness: 6,
}

export default styles
