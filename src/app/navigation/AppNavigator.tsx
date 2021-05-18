import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'
import { connect } from 'react-redux'
import Addresses from 'screens/Addresses'
import Counters from 'screens/Counters'
import Main from 'screens/Main'
import Payment from 'screens/Payment'
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
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Addresses" component={Addresses} />
      <Stack.Screen name="Counters" component={Counters} />
      <Stack.Screen name="Statistic" component={Statistic} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default connector(AppNavigator)
