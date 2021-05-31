import { User } from '@react-native-community/google-signin'
import { IAddressItem, IError } from 'types/index'

enum ActionType {
  LOGIN_BEGIN = '[auth] LOGIN_BEGIN',
  LOGIN_SUCCESS = '[auth] LOGIN_SUCCESS',
  LOGIN_ERROR = '[auth] LOGIN_ERROR',
  SIGN_OUT_BEGIN = '[auth] SIGN_OUT_BEGIN',
  SIGN_OUT_SUCCESS = '[auth] SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR = '[auth] SIGN_OUT_ERROR',
  UPDATE_USER = '[auth] UPDATE_USER',
  SAVE_ADDRESS = '[addresses] SAVE_ADDRESS',
  REPLACE_ADDRESSES = '[addresses] REPLACE_ADDRESSES',
}

export interface LoginBeginAction {
  type: ActionType.LOGIN_BEGIN
}

export interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS
  payload: User
}

export interface LoginErrorAction {
  type: ActionType.LOGIN_ERROR
  payload: IError
}

export interface SignOutBeginAction {
  type: ActionType.SIGN_OUT_BEGIN
}

export interface SignOutSuccessAction {
  type: ActionType.SIGN_OUT_SUCCESS
}

export interface SignOutErrorAction {
  type: ActionType.SIGN_OUT_ERROR
  payload: IError
}

export interface UpdateUserAction {
  type: ActionType.UPDATE_USER
  payload: User
}

export interface SaveAddressAction {
  type: ActionType.SAVE_ADDRESS
  payload: IAddressItem
}

export interface ReplaceAddressAction {
  type: ActionType.REPLACE_ADDRESSES
  payload: IAddressItem[]
}

export type Action =
  | LoginBeginAction
  | LoginSuccessAction
  | LoginErrorAction
  | SignOutBeginAction
  | SignOutSuccessAction
  | SignOutErrorAction
  | UpdateUserAction
  | SaveAddressAction
  | ReplaceAddressAction

export default ActionType
