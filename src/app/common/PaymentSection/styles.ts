import colors from 'constants/colors'
import fonts from 'constants/fonts'
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
    paddingTop: 35,
  },
  payToText: {
    ...fonts.normal,
    fontSize: 10,
    lineHeight: 12,
    color: colors.black,
  },
  payDayText: {
    ...fonts.light,
    fontSize: 36,
    lineHeight: 43,
    color: colors.black,
  },
  payMonth: {
    ...fonts.normal,
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
  },
  toPayContainer: {
    marginRight: 29,
    width: '30%',
  },
  toPayText: {
    ...fonts.normal,
    fontSize: 10,
    lineHeight: 12,
    color: colors.woodsmoke,
  },
  payAmount: {
    ...fonts.medium,
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
    fontFamily: 'SourceSansPro-ExtraLightItalic',
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 15,
    color: colors.white,
  },
  lastMonth: {
    fontFamily: 'SourceSansPro-LightItalic',
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 13,
    color: colors.orangePeel,
  },
})

export default styles
