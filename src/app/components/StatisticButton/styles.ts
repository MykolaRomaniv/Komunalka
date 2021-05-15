import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  statisticButton: {
    backgroundColor: colors.orangePeel,
    // box-shadow: 0px 4px 20px rgba(255, 153, 0, 0.3),
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 3,
  },
  selected: {
    backgroundColor: colors.blue,
  },
  text: {
    fontFamily: 'SourceSansPro-ExtraLightItalic',
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 15,
    color: colors.white,
  },
})

export default styles
