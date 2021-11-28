import colors from 'constants/colors'
import { StyleSheet } from 'react-native'
import { vw } from 'services/dimensions'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 4,
    borderRadius: 30,
    width: vw(42),
    height: vw(23),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 28,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
    marginLeft: 20,
  },
  textWrapper: {
    flexShrink: 1,
  },
  text: {
    flexShrink: 1,
  },
})

export default styles
