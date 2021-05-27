import colors from 'constants/colors'
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
  submitText: {
    color: colors.black,
  },
})

export default styles
