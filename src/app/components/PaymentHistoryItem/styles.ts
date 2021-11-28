import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  paymentHistoryContainer: {
    marginTop: 3,
    backgroundColor: colors.romance,
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 3,
    borderRadius: 45,
    paddingLeft: 19,
    paddingRight: 36,
    paddingBottom: 5,
    paddingTop: 27,
    marginBottom: 10,
  },
  bankName: {
    ...fonts.light,
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
  },
  leftText: {
    ...fonts.normal,
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginBottom: 8,
  },
  rightText: {
    ...fonts.light,
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginBottom: 8,
    textAlign: 'right',
  },
  columns: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
  },
})

export default styles
