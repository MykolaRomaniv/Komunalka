import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerStyle: {},
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.borderGray,
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  cellText: {
    color: colors.black,
    fontSize: 30,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
  },
})
