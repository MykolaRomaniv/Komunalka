import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    height: '100%',
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
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 19,
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
  menuItemsContainer: {
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginLeft: 19,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 40,
  },
  paymentHistoryTitle: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
    opacity: 0.87,
  },
})

export default styles
