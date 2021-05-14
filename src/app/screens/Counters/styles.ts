import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  street: {
    ...fonts.normal,
    fontSize: 14,
    lineHeight: 17,
    color: colors.woodsmoke,
    marginLeft: 16,
    marginTop: 16,
  },
  monthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
  },
  calendarIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
    marginLeft: 16,
  },
  arrowDown: {
    width: 12,
    height: 8,
    marginLeft: 3,
  },
})

export default styles
