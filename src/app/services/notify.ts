/* eslint-disable no-nested-ternary */
import colors from 'constants/colors'
import Toast from 'react-native-root-toast'

export interface IToast {
  text: string
  backgroundColor: string
}

export interface IBackendError {
  message?: string
}

const textArray: IToast[] = []
let ready = true

const toast = () => {
  Toast.show(textArray[0].text, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP + 12,
    backgroundColor: textArray[0].backgroundColor,
    shadow: true,
    animation: true,
    hideOnPress: true,
    textColor: colors.white,
    textStyle: {
      fontSize: 14,
    },
    opacity: 0.9,
    delay: 0,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
      textArray.splice(0, 1)
      ready = true
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      loop()
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  })
}

const loop = () => {
  if (!textArray.length) {
    return
  }
  if (!ready) {
    setTimeout(() => {
      loop()
    }, 100)
  } else {
    ready = false
    toast()
  }
}

const arrayHandler = (array: string[], backgroundColor: string) =>
  array.forEach((element: string) =>
    textArray.push({ text: element, backgroundColor }),
  )

const stringHandler = (text: string, backgroundColor: string) =>
  textArray.push({ text, backgroundColor })

const notify = (
  text: string | string[] | IBackendError,
  type?: 'danger' | 'success' | 'warning' | 'exit',
): void => {
  const backgroundColor =
    type === 'danger'
      ? colors.cinnabar
      : type === 'success'
      ? colors.atlantis
      : type === 'warning'
      ? colors.tango
      : type === 'exit'
      ? colors.doveGray
      : colors.cinnabar

  if (text) {
    if (Array.isArray(text)) {
      arrayHandler(text, backgroundColor)
    } else if (typeof text === 'string') {
      stringHandler(text, backgroundColor)
    } else if (typeof text.message === 'string') {
      stringHandler(text.message, backgroundColor)
    }
  }
  loop()
}

export default notify
