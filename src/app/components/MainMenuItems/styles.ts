import colors from 'constants/colors'
import { StyleSheet } from 'react-native'
import { vw } from 'services/dimensions'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 2,
    borderRadius: 30,
    width: vw(30),
    height: vw(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default styles
