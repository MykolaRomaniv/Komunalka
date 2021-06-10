import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form'
import { AllAction } from 'store/action'
import userActions from 'store/user/actions'
import { AppStackParamList, ReduxState } from 'types'

import IFormData from './IFormData.d'
import ContentView from './view'

const selector = formValueSelector('cardPayment')

const mapStateToProps = (state: ReduxState) => ({
  values: selector(
    state,
    'cardNumber',
    'expiryDate',
    'securityCode',
  ) as IFormData,
})

const mapDispatchToProps = (dispatch: Dispatch<AllAction>) => ({
  authActions: bindActionCreators(userActions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type IProps = StackScreenProps<AppStackParamList, 'CardPayment'> &
  ConnectedProps<typeof connector>

const CardPayment: React.FC<InjectedFormProps<IFormData, IProps> & IProps> = ({
  initialize,
}) => {
  useEffect(() => {
    initialize({
      cardNumber: '',
      expiryDate: '',
      securityCode: '',
    })
  }, [])

  return <ContentView />
}

export default compose<typeof CardPayment>(
  reduxForm<IFormData, IProps>({
    form: 'cardPayment',
  }),
  connector,
)(CardPayment)
