/* eslint-disable no-nested-ternary */
import { Dimensions, Platform, StatusBar } from 'react-native'

export const { width } = Dimensions.get('window')
export const height =
  Platform.OS === 'ios'
    ? Dimensions.get('screen').height
    : Dimensions.get('screen').height - (StatusBar.currentHeight || 0)

export const windowHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : Dimensions.get('window').height - (StatusBar.currentHeight || 0)

export const perc = (per: number, fullValue: number) => (fullValue / 100) * per

export const vh = (v: number) => perc(v, height)
export const vw = (v: number) => perc(v, width)

export const animationSize = Math.min(width, height) - 1 + 70

export const getLeftPosition = (offset?: number) => {
  const halfSize = animationSize / 2
  const halfWidth = width / 2
  const marginHorizontalTopLeft = -halfSize

  return marginHorizontalTopLeft + halfWidth - (offset || 0)
}

export const getTopPosition = (offset?: number) => {
  const halfSize = animationSize / 2
  const marginVerticalTopLeft = -halfSize

  return marginVerticalTopLeft + height - (offset || 0)
}

export const isIPhoneX = () =>
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  //* iPhone [X, Xs, 11 Pro]
  (height === 812 ||
    width === 812 ||
    //* iPhone [Xr, Xs Max, 11, 11 Pro Max]
    height === 896 ||
    width === 896)

export const getStatusBarHeight = (safe = true) =>
  Platform.select({
    ios: isIPhoneX() ? (safe ? 44 : 30) : 20,
    android: StatusBar.currentHeight,
    default: 0,
  })

export const getBottomSpace = () => (isIPhoneX() ? 34 : 0)

export const isSmallPhone = () => height < 600

export default {
  width,
  height,
  windowHeight,
  vh,
  vw,
  perc,
  isIPhoneX,
  getStatusBarHeight,
  getBottomSpace,
  isSmallPhone,
}
