import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: colors.white,
  },
  iconsRow: {
    marginRight: 26,
    marginVertical: 12,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: -26,
  },
  trashIcon: {
    width: 24,
    height: 30,
  },
  addIcon: {
    width: 52,
    height: 50,
  },
  map: {
    width: '100%',
    height: '25%',
  },
  scrollable: {
    marginBottom: 40,
  },
})

export default styles
