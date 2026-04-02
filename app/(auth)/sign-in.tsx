import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SingIN = () => {
  return (
    <View>
      <Text>SignIN</Text>
      <Link href={'/(auth)/sing-up'}>Go to Sign Up</Link>
    </View>
  );
};

export default SingIN;
