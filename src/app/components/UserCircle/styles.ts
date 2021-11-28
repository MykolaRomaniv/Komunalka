import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  userCircle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginRight: 26,
  },
  userCircleText: {
    ...fonts.medium,
    fontSize: 20,
    lineHeight: 26,
    color: colors.white,
  },
})

export default styles
