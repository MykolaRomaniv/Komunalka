import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 38,
    elevation: 3,
    alignItems: 'center',
    marginTop: 38,
  },
  text: {
    ...fonts.light,
    fontSize: 20,
    lineHeight: 26,
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 38,
    marginBottom: 25,
  },
  buttonWrapper: {
    width: '100%',
  },
})

export default styles
