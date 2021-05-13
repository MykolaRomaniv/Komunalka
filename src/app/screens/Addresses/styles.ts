import colors from 'constants/colors'
import { StyleSheet } from 'react-native'
import { height } from 'services/dimensions'

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: colors.white,
  },
  background: {
    width: '100%',
    height,
    flex: 1,
  },
  iconsRow: {
    marginRight: 26,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    alignSelf: 'flex-end',
  },
  trashIcon: {
    width: 24,
    height: 30,
  },
  addIcon: {
    width: 24,
    height: 33,
  },
})

export default styles
