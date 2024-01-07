import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Simple authentication check (replace with server-side logic in a real application)
    if (email === 'op@gmail.com' && password === '123') {
     
      console.log('Authentication successful');
      navigation.navigate('IPOs');
      // Navigate to the home screen or perform any other necessary actions
    } else {
      Alert.alert('Authentication Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.registerText} onPress={() => navigation.navigate('Registration')}>
        Don't have an account? Register here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default Login;
