import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Features = () => {
  return (
    <ScrollView
      style={{height: hp(60)}}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-x-1">
        <Image
          className="rounded-ful"
          source={require('../../assets/images/chatgptIcon.png')}
          style={{height: hp(4), width: wp(4)}}
        />
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>

      <View className="bg-purple-200 p-4 rounded-xl space-x-1">
        <Image
          className="rounded-ful"
          source={require('../../assets/images/dalleIcon.png')}
          style={{height: hp(4), width: wp(4)}}
        />
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>

      <View className="bg-cyan-200 p-4 rounded-xl space-x-1">
        <Image
          className="rounded-ful"
          source={require('../../assets/images/smartaiIcon.png')}
          style={{height: hp(4), width: wp(4)}}
        />
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Features;
