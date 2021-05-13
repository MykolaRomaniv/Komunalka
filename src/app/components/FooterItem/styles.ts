import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 10,
    lineHeight: 14,
    color: colors.osloGray,
  },
  selected: {
    color: colors.capeCod,
  },
})

export default styles
