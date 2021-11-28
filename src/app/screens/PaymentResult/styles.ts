import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { Platform, StyleSheet } from 'react-native'
import { getBottomSpace, getStatusBarHeight, height } from 'services/dimensions'

const styles = StyleSheet.create({
  screenContainer: {
    minHeight: Platform.select<number | string>({
      ios: height,
      default: '100%',
    }),
    backgroundColor: colors.white,
  },
  screen: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 30,
    paddingBottom: getBottomSpace() + 20,
  },
  content: {
    paddingHorizontal: 33,
    elevation: 4,
    backgroundColor: colors.white,
    borderRadius: 38,
  },
  contentInner: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 90,
    marginBottom: 80,
  },
  payedTitleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    alignSelf: 'center',
    marginTop: 24,
  },
  title: {
    ...fonts.light,
    fontSize: 20,
    lineHeight: 26,
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 10,
  },
  unsuccessfulTitle: {
    width: '70%',
    marginLeft: 30,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  payed: {
    width: 117,
    height: 117,
  },
  warningSignIcon: {
    width: 50,
    height: 41,
  },
})

export default styles
