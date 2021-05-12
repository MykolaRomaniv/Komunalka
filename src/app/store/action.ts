import { Action as ReduxAction } from 'redux'

import UserActionType, { Action as UserAction } from './user/types'

export interface Action<T = string, P = unknown> extends ReduxAction<T> {
  payload?: P
}

export const action = <T = string, P = unknown>(
  type: T,
  payload?: P,
): Action<T, P> => ({
  type,
  payload,
})

export type AllActionType = UserActionType

export type AllAction = UserAction

export default action
