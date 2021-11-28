import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEFD',
    // box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.15),
    elevation: 4,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 19,
    paddingRight: 32,
    paddingVertical: 32,
    marginBottom: 20,
  },
  templateIcon: {
    width: 32,
    height: 35,
  },
  arrowNext: {
    width: 8,
    height: 12,
  },
  flexStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 30,
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
})

export default styles
