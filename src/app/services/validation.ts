/* eslint-disable no-control-regex */
import { Validator } from 'redux-form'

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const numberRegex = /^\d+$/
const phoneRegex = /^\+\d{10,14}$/
const noSpacesRegex = /^\S*$/

export const isEmail = (value: string) => emailRegex.test(value)
export const isNumber = (value: string) => numberRegex.test(value)
export const isPhone = (value: string) => phoneRegex.test(value)
export const hasNoSpaces = (value: string) => noSpacesRegex.test(value)

export const requiredValidate: Validator = (value: string | undefined) =>
  value ? undefined : '*required'

export const emailValidate: Validator = (value: string | undefined) =>
  !value || isEmail(value || '')
    ? undefined
    : 'Please enter a valid email address'

export const numberValidate: Validator = (value: string | undefined) =>
  !value || isNumber(value || '') ? undefined : 'Should be a number'

export const phoneValidate: Validator = (value: string | undefined) =>
  !value || isPhone(value || '')
    ? undefined
    : 'Oops! Please enter a complete phone number'

export const minLengthValidate: (len: number) => Validator =
  (len: number) => (value: string | undefined) =>
    !value || (value && value.length >= len)
      ? undefined
      : `Should have at least ${len} symbols`

export const maxLengthValidate: (len: number) => Validator =
  (len: number) => (value: string | undefined) =>
    value && value.length > len ? `Maximum ${len} symbols` : undefined

export const noSpacesValidate: Validator = (value: string | undefined) =>
  hasNoSpaces(value || '') ? undefined : 'Can`t include spaces'

export const isDevCard = (inputtxt: string) => __DEV__ && /^4242/.test(inputtxt)

export const isAmexCardnumber = (inputtxt: string) => {
  const cardno = /^(?:3[47][0-9]{13})$/
  return cardno.test(inputtxt)
}
export const isVisaCardnumber = (inputtxt: string) => {
  const cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
  return cardno.test(inputtxt)
}
export const isMasterCardnumber = (inputtxt: string) => {
  const cardno = /^(?:5[1-5][0-9]{14})$/
  return cardno.test(inputtxt)
}
export const isDiscoverCardnumber = (inputtxt: string) => {
  const cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/
  return cardno.test(inputtxt)
}
export const isDinerClubCardnumber = (inputtxt: string) => {
  const cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/
  return cardno.test(inputtxt)
}
export const isJCBCardnumber = (inputtxt: string) => {
  const cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/
  return cardno.test(inputtxt)
}
export const CreditCardNumberValidate: Validator = (
  value: string | undefined,
) => {
  const cardNumber = value || ''
  let cardType = null
  if (isVisaCardnumber(cardNumber)) {
    cardType = 'visa'
  } else if (isMasterCardnumber(cardNumber)) {
    cardType = 'mastercard'
  } else if (isAmexCardnumber(cardNumber)) {
    cardType = 'americanexpress'
  } else if (isDiscoverCardnumber(cardNumber)) {
    cardType = 'discover'
  } else if (isDinerClubCardnumber(cardNumber)) {
    cardType = 'dinerclub'
  } else if (isJCBCardnumber(cardNumber)) {
    cardType = 'jcb'
  } else if (isDevCard(cardNumber)) {
    cardType = 'develop'
  }
  return cardType ? undefined : 'Invalid card number'
}

export const expirityDateValidate: Validator = (value: string | undefined) => {
  if (!value) {
    return undefined
  }

  const now = new Date()
  const input = value.match(/.{1,2}/g)
  if (!input) {
    return undefined
  }

  const [inputMonth, inputYear] = input.map(Number)

  const year = now.getFullYear() % 100
  const month = now.getMonth() + 1
  if (year > inputYear) {
    return 'Please enter a valid year'
  }
  if (
    (year === inputYear && month > inputMonth) ||
    inputMonth < 1 ||
    inputMonth > 12
  ) {
    return 'Please enter a valid month'
  }
  return undefined
}

export default {
  isEmail,
  isNumber,
  isPhone,
  hasNoSpaces,
  requiredValidate,
  emailValidate,
  numberValidate,
  phoneValidate,
  minLengthValidate,
  maxLengthValidate,
  noSpacesValidate,
  CreditCardNumberValidate,
  expirityDateValidate,
}
