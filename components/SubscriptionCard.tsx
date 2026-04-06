import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/lib/utils';
import clsx from 'clsx';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { CollapsableContainer } from './CollapsableContainer.';

const SubscriptionCard = ({
  name,
  icon,
  price,
  color,
  currency,
  category,
  renewalDate,
  onCancelPress,
  billing,
  paymentMethod,
  startDate,
  onPress,
  expanded,
  status,
  plan,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      className={clsx('sub-card', expanded ? 'sub-card-expanded' : 'bg-card')}
      onPress={onPress}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className='sub-head'>
        <View className='sub-main'>
          <View className='sub-icon-wrap '>
            <Image source={icon} className='sub-icon' />
          </View>
          <View className='sub-copy'>
            <Text className='sub-title text-lg' numberOfLines={2}>
              {name}
            </Text>
            <Text className='sub-meta' numberOfLines={1}>
              {plan?.trim() || category?.trim() || renewalDate
                ? formatSubscriptionDateTime(renewalDate)
                : ''}
            </Text>
          </View>
        </View>
        <View className='sub-price-box'>
          <Text className='sub-price'>{formatCurrency(price, currency)}</Text>
          <Text className='sub-price'>{billing}</Text>
        </View>
      </View>
      {expanded && (
        <CollapsableContainer expanded={expanded}>
          <View className='sub-body'>
            <View className='sub-details'>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Payment:</Text>
                  <Text
                    className='sub-value'
                    ellipsizeMode='tail'
                    numberOfLines={1}
                  >
                    {paymentMethod?.trim()}
                  </Text>
                </View>
              </View>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Cateogry:</Text>
                  <Text
                    className='sub-value'
                    ellipsizeMode='tail'
                    numberOfLines={1}
                  >
                    {category?.trim() || plan?.trim()}
                  </Text>
                </View>
              </View>
              {startDate && (
                <View className='sub-row'>
                  <View className='sub-row-copy'>
                    <Text className='sub-label'>Started:</Text>
                    <Text
                      className='sub-value'
                      ellipsizeMode='tail'
                      numberOfLines={1}
                    >
                      {formatSubscriptionDateTime(startDate)}
                    </Text>
                  </View>
                </View>
              )}
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Renewal Date:</Text>
                  <Text
                    className='sub-value'
                    ellipsizeMode='tail'
                    numberOfLines={1}
                  >
                    {formatSubscriptionDateTime(renewalDate)}
                  </Text>
                </View>
              </View>
              <View className='sub-row'>
                <View className='sub-row-copy'>
                  <Text className='sub-label'>Status:</Text>
                  <Text
                    className='sub-value'
                    ellipsizeMode='tail'
                    numberOfLines={1}
                  >
                    {formatStatusLabel(status)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </CollapsableContainer>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
