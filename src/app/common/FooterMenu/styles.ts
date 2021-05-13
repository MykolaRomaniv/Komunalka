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
    width: 28,
    height: 28,
  },
  graphIcon: {
    width: 30,
    height: 24,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  addressIcon: {
    width: 24,
    height: 24,
  },
  personIcon: {
    width: 26,
    height: 24,
  },
})

export default styles
