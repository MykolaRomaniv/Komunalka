import { StackScreenProps } from '@react-navigation/stack'
import FooterMenu from 'common/FooterMenu'
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
  authActions: bindActionCreators(userActions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type IProps = StackScreenProps<AppStackParamList, 'AddAddress'> &
  ConnectedProps<typeof connector>

const AddAddress: React.FC<InjectedFormProps<IFormData, IProps> & IProps> = ({
  navigation,
  initialize,
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

  return (
    <SafeAreaView>
      <ContentView navigation={navigation} />
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
