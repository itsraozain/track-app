import React, { useState } from 'react';
import { StyleSheet, View,ImageBackground, ActivityIndicator } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h1 style={{paddingHorizontal:40,paddingTop:'20%',color:'#000D47'}} >{headerText}</Text>
      </Spacer>
      <View style={{paddingHorizontal:20}}>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        labelStyle={{color:'#000D47'}}
        inputContainerStyle={{borderBottomColor:'#000D47'}}
       
      />
      </View>
      <Spacer />
      <View style={{paddingHorizontal:20}}>
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        labelStyle={{color:'#000D47'}}
        inputContainerStyle={{borderBottomColor:'#000D47'}}
      />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
          containerStyle={{borderRadius:20,marginHorizontal:30}}
          buttonStyle={{backgroundColor:'#000D47'}}
         
        
        />
      </Spacer>
    
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 30,
    marginTop: 15
  }
});

export default AuthForm;
