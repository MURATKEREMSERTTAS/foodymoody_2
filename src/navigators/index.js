import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {SplashScreen,WelcomeScreen,SignInScreen,OrderComplete,CreateAccountScreen,ForgotPasswordScreen,RegisterScreen,RestaurantDetail,Home, VerificationScreen} from "../screens";
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

const store = configureStore();
const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name='SignInScreen' component={SignInScreen}/>
                    <Stack.Screen name='CreateAccountScreen' component={CreateAccountScreen}/>
                    <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
                    <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
                    <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleteScreen" component={OrderComplete} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
    };

    export default Navigators;