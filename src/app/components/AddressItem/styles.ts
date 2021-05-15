import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15);
    borderRadius: 45,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 35,
    paddingVertical: 31,
    marginBottom: 20,
  },
  icon: {
    width: 57,
    height: 53,
  },
  addressText: {
    ...fonts.normal,
    fontSize: 14,
    lineHeight: 17,
    color: colors.woodsmoke,
  },
  cityText: {
    ...fonts.light,
    fontSize: 12,
    lineHeight: 14,
    color: colors.midGray,
  },
})

export default styles
