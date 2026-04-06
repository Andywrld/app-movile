import { formatCurrency } from '@/lib/utils';

import { Image, Text, View } from 'react-native';

const UpcomingSubsciptionCard = ({
  icon,
  name,
  price,
  daysLeft,
  currency,
}: UpcomingSubscriptionCardProps) => {
  return (
    <View className='upcoming-card'>
      <View className='upcoming-row'>
        <View className='upcoming-icon-wrap'>
          <Image source={icon} className='upcoming-icon' />
        </View>
        <View>
          <Text className='upcoming-price'>
            {formatCurrency(price, currency)}
          </Text>
          <Text className='upcoming-meta' numberOfLines={1}>
            {daysLeft > 1
              ? `${daysLeft} days left`
              : daysLeft === 1
                ? '1 day left'
                : 'Last day'}
          </Text>
        </View>
      </View>
      <Text className='upcoming-name' numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpcomingSubsciptionCard;
