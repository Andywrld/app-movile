import { Text, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';

const SusbcriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Susbcription Details: {id}</Text>
    </View>
  );
};

export default SusbcriptionDetails;
