import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'
import { vw } from 'services/dimensions'

const styles = StyleSheet.create({
  page: {
    height: '100%',
  },
  graphContentWrapper: {
    backgroundColor: colors.charade,
    height: '50%',
  },
  rowTitle: {
    fontFamily: 'SourceSansPro-ExtraLightItalic',
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 15,
    color: colors.white,
    marginVertical: 5,
    marginLeft: 19,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 19,
  },
  bgGraph: {
    height: '30%',
    alignSelf: 'flex-end',
  },
  banner: {
    backgroundColor: colors.romance,
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 3,
    borderRadius: 45,
    marginTop: -45,
    overflow: 'hidden',
  },
  month: {
    ...fonts.medium,
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginLeft: 19,
    marginTop: 24,
  },
  horizontalDivider: {
    opacity: 0.3,
    backgroundColor: colors.black,
    height: 1,
    width: '100%',
  },
  serviceType: {
    ...fonts.bold,
    fontSize: 24,
    lineHeight: 28,
    color: colors.black,
    marginLeft: 19,
    marginTop: 27,
  },
  amount: {
    ...fonts.medium,
    fontSize: 48,
    lineHeight: 57,
    color: colors.firefly,
    marginTop: 10,
  },
  currency: {
    ...fonts.bold,
    fontSize: 24,
    lineHeight: 28,
    color: colors.firefly,
    marginTop: 31,
    marginRight: 26,
  },
  difference: {
    ...fonts.light,
    fontSize: 18,
    lineHeight: 21,
    color: colors.silverChalice,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountRow: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  upDownRow: {
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 4,
  },
  arrowUpRed: {
    width: 28,
    height: 16,
  },
  serviceFooter: {
    backgroundColor: colors.dodgerBlue,
    height: 67,
  },
  chart: {
    marginTop: 35,
    marginRight: 15,
    width: vw(100),
    height: '40%',
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
})

export default styles
