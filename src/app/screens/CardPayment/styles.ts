import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    borderRadius: 38,
  },
  title: {
    ...fonts.light,
    fontSize: 20,
    lineHeight: 26,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  submitButton: {
    backgroundColor: colors.orangePeel,
    borderRadius: 40,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 18,
  },
  disabledButton: {},
  submitText: {
    ...fonts.normal,
    fontSize: 18,
    lineHeight: 21,
    color: colors.white,
  },
})

export default styles
