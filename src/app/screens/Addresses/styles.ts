import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: colors.white,
  },
  headerText: {
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 26,
    color: colors.black,
    opacity: 0.87,
    marginLeft: 20,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  background: {
    width: '100%',
    flex: 1,
  },
  iconsRow: {
    flexDirection: 'row',
    backgroundColor: 'red',
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
