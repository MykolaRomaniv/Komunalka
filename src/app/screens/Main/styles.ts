import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    height: '100%',
  },

  menuItemsContainer: {
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginLeft: 19,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 40,
  },
  paymentHistoryTitle: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
    opacity: 0.87,
  },
})

export default styles
