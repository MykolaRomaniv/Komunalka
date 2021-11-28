import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'
import { connect } from 'react-redux'
import AddAddress from 'screens/AddAddress'
import Addresses from 'screens/Addresses'
import AutoPaymentBigItem from 'screens/AutoPaymentBigItem'
import AutoPayments from 'screens/AutoPayments'
import AutoPaymentsTemplates from 'screens/AutoPaymentsTemplates'
import CardPayment from 'screens/CardPayment'
import Counters from 'screens/Counters'
import Login from 'screens/Login'
import Main from 'screens/Main'
import NotificationBigItem from 'screens/NotificationBigItem'
import NotificationsAndPayments from 'screens/NotificationsAndPayments'
import NotificationTemplates from 'screens/NotificationTemplates'
import Payment from 'screens/Payment'
import PaymentResult from 'screens/PaymentResult'
import Registration from 'screens/Registration'
import Statistic from 'screens/Statistic'
import { AppStackParamList, ReduxState } from 'types'

const Stack = createStackNavigator<AppStackParamList>()

const mapStateToProps = (state: ReduxState) => ({
  userEmail: state.user.userData && state.user.userData.user.email,
})

const connector = connect(mapStateToProps)

const AppNavigator = () => (
  <NavigationContainer>
    {/* <StatusBar translucent backgroundColor="transparent" /> */}
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Addresses" component={Addresses} />
      <Stack.Screen name="Counters" component={Counters} />
      <Stack.Screen name="Statistic" component={Statistic} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CardPayment" component={CardPayment} />
      <Stack.Screen name="PaymentResult" component={PaymentResult} />
      <Stack.Screen
        name="NotificationsAndPayments"
        component={NotificationsAndPayments}
      />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen
        name="NotificationTemplates"
        component={NotificationTemplates}
      />
      <Stack.Screen
        name="NotificationBigItem"
        component={NotificationBigItem}
      />
      <Stack.Screen name="AutoPaymentBigItem" component={AutoPaymentBigItem} />
      <Stack.Screen name="AutoPayments" component={AutoPayments} />
      <Stack.Screen
        name="AutoPaymentsTemplates"
        component={AutoPaymentsTemplates}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default connector(AppNavigator)
