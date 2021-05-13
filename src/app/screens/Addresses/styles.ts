import colors from 'constants/colors'
import { StyleSheet } from 'react-native'
import { height } from 'services/dimensions'

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: colors.white,
  },
  headerText: {
    fontFamily: 'Rubik-Light',
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
    height,
    flex: 1,
  },
  iconsRow: {
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
