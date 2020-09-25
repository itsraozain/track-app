import React, { useContext } from 'react';
import { View, StyleSheet, Text,ImageBackground } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <ImageBackground style={styles.backimage} imageStyle={{opacity:0.4}} source={require('../../assets/backeffect.jpg')}>

    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
    </ImageBackground>
  );
};

SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    justifyContent: 'center',
    marginBottom: 250,
  },
  backimage:{
    flex:1,
    
  }
});

export default SigninScreen;
