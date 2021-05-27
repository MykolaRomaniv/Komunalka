import { AxiosError } from 'axios'
import { Animated, RegisteredStyle, ViewStyle } from 'react-native'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import rootReducer from 'store'
import { AllActionType } from 'store/action'

export type ReduxState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = unknown> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action<AllActionType>
>
export type AppThunkAsync<ReturnType = unknown> = ThunkAction<
  Promise<ReturnType | undefined | void>,
  ReduxState,
  unknown,
  Action<AllActionType>
>
interface IBackendError {
  data?: {
    errors?: string | string[]
  }
}

export type IError<T = { errors: string[] }> =
  | {
      name?: string
      message?: string
      stack?: string
      code?: number
    }
  | string
  | string[]
  | AxiosError<T>
  | IBackendError

export type AppStackParamList = {
  Main: undefined
  Addresses: undefined
  Counters: undefined
  Statistic: undefined
  Payment: undefined
}

export type AnimatedViewStyle =
  | false
  | RegisteredStyle<ViewStyle>
  | Animated.Value
  | Animated.AnimatedInterpolation
  | Animated.WithAnimatedObject<ViewStyle>
  | null
  | undefined

export type TextContentType =
  | 'none'
  | 'URL'
  | 'addressCity'
  | 'addressCityAndState'
  | 'addressState'
  | 'countryName'
  | 'creditCardNumber'
  | 'emailAddress'
  | 'familyName'
  | 'fullStreetAddress'
  | 'givenName'
  | 'jobTitle'
  | 'location'
  | 'middleName'
  | 'name'
  | 'namePrefix'
  | 'nameSuffix'
  | 'nickname'
  | 'organizationName'
  | 'postalCode'
  | 'streetAddressLine1'
  | 'streetAddressLine2'
  | 'sublocality'
  | 'telephoneNumber'
  | 'username'
  | 'password'
  | 'newPassword'
  | 'oneTimeCode'
  // is not in the documentation. may occur strange behavior
  | 'expiryDate'
