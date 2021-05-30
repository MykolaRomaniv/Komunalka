import colors from 'constants/colors'
import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.romance,
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    borderRadius: 30,
    marginBottom: 23,
    elevation: 3,
    paddingTop: 15,
    paddingLeft: 26,
    paddingBottom: 38,
    paddingRight: 15,
  },
  organizationName: {
    ...fonts.normal,
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
  },
  serviceName: {
    ...fonts.light,
    fontSize: 10,
    lineHeight: 12,
    color: colors.black,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {},
  leftText: {
    ...fonts.light,
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginTop: 7,
  },
  rightText: {
    ...fonts.medium,
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginTop: 7,
  },
  editableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  highlightText: {
    ...fonts.light,
    fontSize: 12,
    lineHeight: 14,
    color: colors.scooter,
    marginTop: 7,
  },
  newCounter: {
    ...fonts.medium,
    fontSize: 12,
    lineHeight: 14,
    color: colors.scooter,
  },
  penIcon: {
    width: 14,
    height: 12,
  },
})

export default styles
