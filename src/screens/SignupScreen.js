import React, { useContext } from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <ImageBackground style={styles.backimage} imageStyle={{opacity:0.4}} source={require('../../assets/backeffect.jpg')}>

    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
    </ImageBackground>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  backimage:{
    flex:1
  }
});

export default SignupScreen;
