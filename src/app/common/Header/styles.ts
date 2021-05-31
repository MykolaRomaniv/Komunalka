import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    backgroundColor: '#fff',
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
