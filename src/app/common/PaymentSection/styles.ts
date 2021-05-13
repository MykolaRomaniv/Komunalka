import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 19,
  },
  payToContainer: {
    width: 109,
    height: 78,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  payToText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 10,
    lineHeight: 12,
    color: colors.black,
  },
  payDayText: {
    fontFamily: 'Rubik-Light',
    fontWeight: '300',
    fontSize: 36,
    lineHeight: 43,
    color: colors.black,
  },
  payMonth: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
  },
  toPayContainer: {
    marginRight: 29,
    width: '30%',
  },
  toPayText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 10,
    lineHeight: 12,
    color: colors.woodsmoke,
  },
  payAmount: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 26,
    color: colors.black,
    opacity: 0.87,
  },
  payRateContainer: {
    height: 20,
    backgroundColor: colors.orangePeel,
    // box-shadow: 0px 4px 20px rgba(255, 153, 0, 0.3),
    elevation: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payRate: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 15,
    color: colors.white,
  },
  lastMonth: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 13,
    color: colors.orangePeel,
  },
})

export default styles
