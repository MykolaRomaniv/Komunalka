//* phone
export const phoneMask = /\d{1,11}/g

export const formatPhone = (
  text: string,
  mask = /\+?(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/,
) => {
  const matched = text.match(mask)
  if (matched) {
    return !matched[1]
      ? matched[2]
      : `+ ${matched[1]}${matched[2] ? ` (${matched[2]}) ` : ''}${
          matched[3] || ''
        }${matched[4] ? ` - ${matched[4]}` : ''}`
  }
  return ''
}
//* phone end

//* credit card
export const cardMask = /\d+/g

export const formatCard = (
  text: string,
  mask = /(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/,
) => {
  const matched = text.match(mask)
  if (matched) {
    return !matched[1]
      ? matched[2]
      : `${matched[1]} ${matched[2] ? `${matched[2]} ` : ''}${
          matched[3] ? `${matched[3]} ` : ''
        }${matched[4] ? matched[4] : ''}`
  }
  return ''
}
//* credit card end

//* expiry date
export const expiryDateMask = /\d{0,4}/g

export const formatExpiryDate = (text: string, mask = /(\d{0,2})(\d{0,2})/) => {
  const matched = text.match(mask)
  if (matched) {
    return !matched[1] ? matched[2] : `${matched[1]} / ${matched[2] || ''}`
  }
  return ''
}
//* expiry date

export const formatDate = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = String(date.getFullYear() % 100).padStart(2, '0')
  return `${month}/${day}/${year}`
}

export default {
  phoneMask,
  formatPhone,
  cardMask,
  formatCard,
  expiryDateMask,
  formatExpiryDate,
  formatDate,
}
