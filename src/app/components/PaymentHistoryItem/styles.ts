import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  paymentHistoryContainer: {
    marginTop: 3,
    backgroundColor: colors.romance,
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 3,
    borderRadius: 45,
    marginLeft: -19,
    paddingLeft: 19,
    paddingRight: 36,
    paddingBottom: 5,
    paddingTop: 8,
    marginBottom: 10,
  },
  bankName: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
  },
  leftText: {
    fontFamily: 'Rubik',
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginBottom: 8,
  },
  rightText: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginBottom: 8,
    textAlign: 'right',
  },
  columns: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

export default styles
