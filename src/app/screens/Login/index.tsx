import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, compose, Dispatch } from 'redux'
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form'
import { AllAction } from 'store/action'
import userActions from 'store/user/actions'
import { AppStackParamList, ReduxState, UserData } from 'types'

import IFormData from './IFormData.d'
import ContentView from './view'

const selector = formValueSelector('login')

const mapStateToProps = (state: ReduxState) => ({
  user: state.user.userData?.user,
  isLoading: state.user.isLoading,
  values: selector(state, 'email', 'password') as IFormData,
})

const mapDispatchToProps = (dispatch: Dispatch<AllAction>) => ({
  authActions: bindActionCreators(userActions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type IProps = StackScreenProps<AppStackParamList, 'Login'> &
  ConnectedProps<typeof connector>

const Login: React.FC<InjectedFormProps<IFormData, IProps> & IProps> = ({
  user,
  initialize,
  authActions: { updateUser },
  values,
  valid,
  navigation: { navigate },
}) => {
  useEffect(() => {
    initialize({
      email: user?.email || '',
      password: '',
    })
  }, [])

  const save = () => {
    const data = { ...values } as Partial<UserData>
    updateUser({ user: { ...user, ...data } })
    navigate('Main')
  }

  return <ContentView save={save} valid={valid} />
}

export default compose<typeof Login>(
  reduxForm<IFormData, IProps>({
    form: 'login',
  }),
  connector,
)(Login)
