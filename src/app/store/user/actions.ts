import { GoogleSignin, User } from '@react-native-community/google-signin'
import { DeepPartial } from 'redux'
import notify from 'services/notify'
// eslint-disable-next-line import/no-named-as-default
import action from 'store/action'
import { AppThunkAsync, IError } from 'types/index'

import ActionType from './types'

export const googleLogin =
  (
    onSuccess?: (user: User | undefined) => void,
    onError?: (e: IError) => void,
  ): AppThunkAsync<User | undefined> =>
  async (dispatch) => {
    dispatch(action(ActionType.LOGIN_BEGIN))

    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      dispatch(action(ActionType.LOGIN_SUCCESS, userInfo))
      onSuccess?.(userInfo)
    } catch (error) {
      notify(error)
      dispatch(action(ActionType.LOGIN_ERROR, error))
      onError?.(error)
    }
  }

export const googleSignOut =
  (onSuccess?: () => void, onError?: (e: IError) => void): AppThunkAsync =>
  async (dispatch) => {
    dispatch(action(ActionType.SIGN_OUT_BEGIN))

    try {
      const isSignedIn = await GoogleSignin.isSignedIn()
      if (isSignedIn) {
        await GoogleSignin.revokeAccess()
        await GoogleSignin.signOut()
      }
      dispatch(action(ActionType.SIGN_OUT_SUCCESS))
      onSuccess?.()
    } catch (error) {
      notify(error)
      dispatch(action(ActionType.SIGN_OUT_ERROR, error))
      onError?.(error)
    }
  }

export const updateUser =
  (user: DeepPartial<User>, onSuccess?: () => void): AppThunkAsync =>
  async (dispatch) => {
    dispatch(action(ActionType.UPDATE_USER, user))
    onSuccess?.()
  }

export const autoDetectSignOut =
  (onSuccess?: () => void, onError?: (error: IError) => void): AppThunkAsync =>
  async (dispatch) => {
    const isSignedIn = await GoogleSignin.isSignedIn()
    if (isSignedIn) {
      dispatch(googleSignOut(onSuccess, onError))
    }
  }

export default {
  googleLogin,
  googleSignOut,
  updateUser,
  autoDetectSignOut,
}
