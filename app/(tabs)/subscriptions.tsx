import { Text } from 'react-native';

import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const Susbcription = () => {
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <Text>Susbcription</Text>
    </SafeAreaView>
  );
};

export default Susbcription;
