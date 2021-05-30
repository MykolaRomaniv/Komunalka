import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 9,
    lineHeight: 11,
    color: colors.osloGray,
  },
  selected: {
    color: colors.capeCod,
  },
})

export default styles
