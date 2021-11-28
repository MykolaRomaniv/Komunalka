import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    height: '100%',
  },
  contentContainer: {
    paddingBottom: 50,
  },
  menuItemsContainer: {
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginHorizontal: 19,
  },
  paymentHistoryTitle: {
    ...fonts.medium,
    fontSize: 14,
    lineHeight: 18,
    color: colors.black,
    opacity: 0.87,
    marginLeft: 19,
  },
  paymentIcon: {
    width: 19,
    height: 15,
  },
  statisticsIcon: {
    width: 24,
    height: 17,
  },
  notificationIcon: {
    width: 17,
    height: 20,
  },
  autoPaymentIcon: {
    width: 19,
    height: 17,
  },
  addressIcon: {
    width: 18,
    height: 19,
  },
  counterIcon: {
    width: 21,
    height: 20,
  },
})

export default styles
