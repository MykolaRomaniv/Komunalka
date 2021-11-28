import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { Platform, StyleSheet } from 'react-native'
import { getBottomSpace, height } from 'services/dimensions'

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
    paddingBottom: getBottomSpace() + 20,
  },
  content: {
    flex: 1,
  },
  formWrapper: {
    backgroundColor: '#FFFEFD',
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 3,
    borderRadius: 45,
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: '20%',
  },
  title: {
    ...fonts.normal,
    fontSize: 24,
    lineHeight: 31,
    color: '#000000',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 30,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  state: {
    width: '40%',
  },
  city: {
    width: '50%',
  },
  secondRow: {
    flexDirection: 'row',
  },
  corpus: {
    width: '25%',
  },
  homeNumber: {
    width: '50%',
    marginLeft: 25,
  },
})

export default styles
