import { useReducer } from 'react'

enum Types {
  SET,
  TOGGLE,
  OFF,
  ON,
}

interface Action {
  value?: boolean
  type: Types
}

const reducer = (state: boolean, action: Action): boolean => {
  switch (action.type) {
    case Types.SET:
      return !!action.value
    case Types.TOGGLE:
      return !state
    case Types.ON:
      return true
    case Types.OFF:
      return false
    default:
      return state
  }
}

export interface UseToggle {
  value: boolean
  set: (value: boolean) => void
  toggle: () => void
  off: () => void
  on: () => void
}

const useToggle = (initial = false): UseToggle => {
  const [state, dispatch] = useReducer(reducer, initial)

  return {
    value: state,
    set: (value: boolean): void => dispatch({ type: Types.SET, value }),
    toggle: (): void => dispatch({ type: Types.TOGGLE }),
    on: (): void => dispatch({ type: Types.ON }),
    off: (): void => dispatch({ type: Types.OFF }),
  }
}

export default useToggle
