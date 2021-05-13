import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'Rubik-Light',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 26,
    opacity: 0.87,
    color: colors.black,
    marginTop: 16,
    marginLeft: 19,
  },
})

export default styles
