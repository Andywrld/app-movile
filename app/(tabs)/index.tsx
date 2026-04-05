import ListHeading from '@/components/ListHeading';
import SubscriptionCard from '@/components/SubscriptionCard';
import UpcomingSubsciptionCard from '@/components/UpcomingSubsciptionCard';
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from '@/const/data';
import { icons } from '@/const/icon';
import images from '@/const/images';
import '@/global.css';
import { formatCurrency, formatSubscriptionDateTime } from '@/lib/utils';
import { styled } from 'nativewind';
import { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  const [isExpandedId, setIsExpandedId] = useState<string | null>(null);
  return (
    <SafeAreaView className='flex-1  bg-background p-5'>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <View className='home-header'>
              <View className='home-user'>
                <Image source={images.avatar} className='home-avatar' />
                <Text className='home-user-name'>{HOME_USER.name}</Text>
              </View>
              <Image source={icons.add} className='size-10' />
            </View>
            <View className='home-balance-card'>
              <Text className='home-balance-label'> Balance</Text>
              <View className='home-balance-row'>
                <Text className='home-balance-amount'>
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className='home-balance-date'>
                  {formatSubscriptionDateTime(HOME_BALANCE.nextRenewalDate)}
                </Text>
              </View>
            </View>

            <View>
              <ListHeading title={'Upcoming'} />

              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => <UpcomingSubsciptionCard {...item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className='home-empty-state'>
                    No upcoming subscriptions
                  </Text>
                }
              />
            </View>
            <View className='mb-4' />
            <ListHeading title={'All subscription'} />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={item.id === isExpandedId}
            onPress={() =>
              setIsExpandedId((currentId) =>
                currentId === item.id ? null : item.id
              )
            }
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={isExpandedId}
        ItemSeparatorComponent={() => <View className='h-4' />}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <Text className='home-empty-state'>No active subscriptions</Text>
        }
        contentContainerClassName='pb-30'
      />
    </SafeAreaView>
  );
}
