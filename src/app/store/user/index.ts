import { User } from '@react-native-community/google-signin'
import { IError } from 'types/index'

import ActionType, { Action } from './types'

interface IState {
  isLoading: boolean
  error: IError | null
  userData: User | null
}

const initialState: IState = {
  isLoading: false,
  error: null,
  userData: null,
}

const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ActionType.LOGIN_BEGIN:
    case ActionType.SIGN_OUT_BEGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ActionType.LOGIN_SUCCESS:
    case ActionType.UPDATE_USER: {
      return {
        ...state,
        isLoading: false,
        error: '',
        userData: action.payload,
      }
    }
    case ActionType.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: '',
        userData: null,
      }
    }
    case ActionType.LOGIN_ERROR:
    case ActionType.SIGN_OUT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}

export default reducer
