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
    paddingBottom: 10,
  },
  title: {
    ...fonts.light,
    fontSize: 20,
    lineHeight: 26,
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: colors.orangePeel,
    borderRadius: 40,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    paddingVertical: 5,
    marginTop: 24,
  },
  disabledButton: {},
  submitText: {
    ...fonts.normal,
    fontSize: 18,
    lineHeight: 21,
    color: colors.white,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginTop: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 6,
    height: 68,
  },
  rowItem: {
    width: '40%',
    marginTop: 30,
  },
})

export default styles
