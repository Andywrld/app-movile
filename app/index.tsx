import '@/global.css';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
export default function Index() {
  return (
    <View className='flex-1 justify-center items-center bg-background'>
      <Text className='text-primary text-5xl font-bold'>Welcome!</Text>
      <Link
        href={'/onboarding'}
        className='mt-4 bg-primary p-4 rounded-md text-white'
      >
        {' '}
        Go to Onboarding{' '}
      </Link>
      <Link
        href={'/(auth)/sign-in'}
        className='mt-4 bg-primary p-4 rounded-md text-white'
      >
        Go to Sign In{' '}
      </Link>
      <Link
        href={'/(auth)/sing-up'}
        className='mt-4 bg-primary p-4 rounded-md text-white'
      >
        Go to Sign Up{' '}
      </Link>
    </View>
  );
}
