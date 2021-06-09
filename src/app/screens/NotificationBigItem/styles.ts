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
  templateIcon: {
    width: 31,
    height: 34,
  },
  container: {
    marginTop: 25,
    backgroundColor: '#FFFEFD',
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 4,
    borderRadius: 30,
  },
  conteinerHeader: {
    marginTop: 22,
    marginLeft: 15,
    flexDirection: 'row',
  },
  textWrapper: {
    marginLeft: 20,
  },
  company: {
    ...fonts.normal,
    fontSize: 12,
    lineHeight: 14,
    color: '#000000',
  },
  description: {
    ...fonts.light,
    fontSize: 10,
    lineHeight: 12,
    color: '#000000',
  },
  twoColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 65,
    paddingRight: 40,
  },
  secondColumn: {
    alignItems: 'flex-end',
  },
})

export default styles
