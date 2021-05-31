import { IAddressItem, IError, User } from 'types/index'

import ActionType, { Action } from './types'

interface IState {
  isLoading: boolean
  error: IError | null
  userData: User | null
  addresses: IAddressItem[]
}

const initialState: IState = {
  isLoading: false,
  error: null,
  userData: null,
  addresses: [],
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
    // TODO change logic
    case ActionType.REPLACE_ADDRESSES: {
      return {
        ...state,
        isLoading: false,
        error: '',
        addresses: [...action.payload],
      }
    }
    case ActionType.SAVE_ADDRESS: {
      return {
        ...state,
        isLoading: false,
        error: '',
        addresses: [...state.addresses, action.payload],
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
