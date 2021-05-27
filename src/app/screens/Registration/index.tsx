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

const selector = formValueSelector('registration')

const mapStateToProps = (state: ReduxState) => ({
  user: state.user.userData?.user,
  isLoading: state.user.isLoading,
  values: selector(
    state,
    'name',
    'familyName',
    'phoneNumber',
    'email',
    'password',
    'confirmPassword',
  ) as IFormData,
})

const mapDispatchToProps = (dispatch: Dispatch<AllAction>) => ({
  authActions: bindActionCreators(userActions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type IProps = StackScreenProps<AppStackParamList, 'Registration'> &
  ConnectedProps<typeof connector>

const Registration: React.FC<InjectedFormProps<IFormData, IProps> & IProps> = ({
  user,
  initialize,
  authActions: { updateUser },
  values,
  // isLoading,
  valid,
}) => {
  useEffect(() => {
    initialize({
      name: user?.name || '',
      familyName: user?.familyName || '',
      phoneNumber: '',
      email: user?.email || '',
      password: '',
      confirmPassword: '',
    })
  }, [])

  const save = () => {
    const data = { ...values } as Partial<UserData>
    updateUser({ ...user, user: { ...data } })
  }

  return <ContentView save={save} valid={valid} />
}

export default compose<typeof Registration>(
  reduxForm<IFormData, IProps>({
    form: 'registration',
  }),
  connector,
)(Registration)