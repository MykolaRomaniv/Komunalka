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
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace() + 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 33,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  title: {
    ...fonts.medium,
    fontSize: 32,
    lineHeight: 38,
    color: colors.orangePeel,
    alignSelf: 'center',
    marginBottom: 10,
  },
  description: {
    ...fonts.light,
    fontSize: 10,
    lineHeight: 12,
    color: colors.black,
    // text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    alignSelf: 'center',
    width: 120,
    textAlign: 'center',
    marginBottom: 60,
  },
  input: {
    alignSelf: 'stretch',
  },
  submitButton: {
    backgroundColor: colors.orangePeel,
    // box-shadow: 0px 4px 8px rgba(27, 225, 175, 0.16);
    elevation: 3,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  disabledButton: {
    backgroundColor: colors.borderGray,
  },
  submitText: {
    ...fonts.medium,
    fontSize: 14,
    lineHeight: 17,
    textTransform: 'uppercase',
    color: colors.concrete,
  },
  rightIcon: {
    width: 32,
    height: 32,
    marginBottom: -30,
  },
})

export default styles
