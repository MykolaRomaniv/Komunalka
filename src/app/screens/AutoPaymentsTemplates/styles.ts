import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    height: '100%',
  },
  contentContainer: {
    paddingBottom: 50,
  },
  title: {
    ...fonts.medium,
    fontSize: 18,
    lineHeight: 21,
    color: '#000000',
    marginLeft: 14,
    marginTop: 35,
    marginBottom: 22,
  },
  waterIcon: {
    width: 31,
    height: 33,
  },
})

export default styles
