import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: colors.orangePeel,
    borderRadius: 40,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    paddingVertical: 5,
    marginTop: 24,
  },
  disabledButton: {
    backgroundColor: colors.borderGray,
  },
  submitText: {
    ...fonts.normal,
    fontSize: 18,
    lineHeight: 21,
    color: colors.white,
  },
})

export default styles
