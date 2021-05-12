import { User } from '@react-native-community/google-signin'

import { IError } from '../../types'

enum ActionType {
  LOGIN_BEGIN = '[auth] LOGIN_BEGIN',
  LOGIN_SUCCESS = '[auth] LOGIN_SUCCESS',
  LOGIN_ERROR = '[auth] LOGIN_ERROR',
  SIGN_OUT_BEGIN = '[auth] SIGN_OUT_BEGIN',
  SIGN_OUT_SUCCESS = '[auth] SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR = '[auth] SIGN_OUT_ERROR',
  UPDATE_USER = '[auth] UPDATE_USER',
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

export interface UpdateUser {
  type: ActionType.UPDATE_USER
  payload: User
}

export type Action =
  | LoginBeginAction
  | LoginSuccessAction
  | LoginErrorAction
  | SignOutBeginAction
  | SignOutSuccessAction
  | SignOutErrorAction
  | UpdateUser

export default ActionType
