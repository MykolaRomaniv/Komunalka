import { StackScreenProps } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
import Header from 'common/Header'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
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

const sum = 899.3

const CardPayment: React.FC<InjectedFormProps<IFormData, IProps> & IProps> = ({
  initialize,
  values,
  valid,
  navigation,
}) => {
  useEffect(() => {
    initialize({
      cardNumber: '',
      expiryDate: '',
      securityCode: '',
    })
  }, [])

  const save = () => {
    const data = { ...values }
    console.log(data)
    navigation.replace('PaymentResult', { isSuccessful: true })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}>{'Оплата комунальних'}</Header>
      <ContentView save={save} valid={valid} sum={sum} />
      <FooterMenu navigation={navigation} />
    </SafeAreaView>
  )
}

export default compose<typeof CardPayment>(
  reduxForm<IFormData, IProps>({
    form: 'cardPayment',
  }),
  connector,
)(CardPayment)
