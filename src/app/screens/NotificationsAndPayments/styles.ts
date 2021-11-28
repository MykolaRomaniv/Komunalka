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
  title: {
    ...fonts.medium,
    fontSize: 18,
    lineHeight: 21,
    color: '#000000',
    marginLeft: 14,
    marginTop: 35,
  },
  tabView: {
    backgroundColor: '#FFFFFF',
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    borderRadius: 10,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
  },
  selected: {
    backgroundColor: '#FF9900',
  },
})

export default styles
