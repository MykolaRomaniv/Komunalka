import { Normalizer } from 'redux-form'
import { TextContentType } from 'types'

export const phoneNormalize: Normalizer = (value: string | undefined) =>
  value && `+${value.replace(/\D/g, '')}`

export const creditNormalizer: Normalizer = (value: string | undefined) =>
  value && `${value.replace(/\D/g, '')}`

export const expiryDateNormalizer: Normalizer = (value: string | undefined) =>
  value && `${value.replace(/\D/g, '')}`

export const getDefaultNormalize = (
  type: TextContentType,
): Normalizer | undefined => {
  switch (type) {
    case 'telephoneNumber':
      return phoneNormalize
    case 'creditCardNumber':
      return creditNormalizer
    case 'expiryDate':
      return expiryDateNormalizer
    default:
      return undefined
  }
}

export default {
  phoneNormalize,
  creditNormalizer,
  expiryDateNormalizer,
  getDefaultNormalize,
}
