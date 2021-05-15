import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    ...fonts.light,
    fontSize: 20,
    lineHeight: 26,
    opacity: 0.87,
    color: colors.black,
    marginTop: 16,
    marginLeft: 19,
  },
})

export default styles
