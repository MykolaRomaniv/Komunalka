import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footerMenu: {
    position: 'absolute',
    backgroundColor: colors.white,
    // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    elevation: 6,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    paddingTop: 8,
    paddingBottom: 6,
  },
  homeIcon: {
    width: 15,
    height: 15,
  },
  counterIcon: {
    width: 14,
    height: 17,
  },
  notificationIcon: {
    width: 13.5,
    height: 20,
  },
  addressIcon: {
    width: 17,
    height: 17,
  },
  autoPaymentsIcon: {
    width: 19,
    height: 17,
  },
  statisticsIcon: {
    width: 24,
    height: 17,
  },
  paymentIcon: {
    width: 10,
    height: 17,
  },
})

export default styles
