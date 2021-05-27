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
  input: {
    alignSelf: 'stretch',
  },
  submitButton: {
    backgroundColor: colors.orangePeel,
    // box-shadow: 0px 4px 8px rgba(27, 225, 175, 0.16);
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
    backgroundColor: '#000',
    marginBottom: -30,
  },
})

export default styles
