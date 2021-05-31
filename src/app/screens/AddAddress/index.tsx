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

const selector = formValueSelector('AddAddress')

const mapStateToProps = (state: ReduxState) => ({
  user: state.user.userData?.user,
  isLoading: state.user.isLoading,
  values: selector(
    state,
    'state',
    'city',
    'street',
    'corpus',
    'homeNumber',
  ) as IFormData,
})

const mapDispatchToProps = (dispatch: Dispatch<AllAction>) => ({
  actions: bindActionCreators(userActions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type IProps = StackScreenProps<AppStackParamList, 'AddAddress'> &
  ConnectedProps<typeof connector>

const AddAddress: React.FC<InjectedFormProps<IFormData, IProps> & IProps> = ({
  navigation,
  initialize,
  values,
  actions: { saveAddress },
}) => {
  useEffect(() => {
    initialize({
      state: '',
      city: '',
      corpus: '',
      homeNumber: '',
      street: '',
    })
  }, [])

  const onSave = () => {
    const address = { ...values }
    saveAddress(address)
    navigation.replace('Addresses')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation}>{'Адреси'}</Header>
      <ContentView onSave={onSave} />
      <FooterMenu navigation={navigation} />
    </SafeAreaView>
  )
}

export default compose<typeof AddAddress>(
  reduxForm<IFormData, IProps>({
    form: 'AddAddress',
  }),
  connector,
)(AddAddress)
