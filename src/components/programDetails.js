import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";

const ProgramDetails = () => {
  return (
    <View
      entering={FadeIn.delay(800).duration(1500)}
      style={[tw`flex pt-8 justify-between mx-8`]}
    >
      <Text style={tw` text-xl font-bold`}>About the Program</Text>
      <View style={tw`flex  flex-row justify-between`}>
        <View style={tw`flex justify-center `}>
          <Text style={styles.smText}>Personalized Workouts</Text>
          <Text style={styles.smText}>Personalized Meal Plans </Text>
          <Text style={styles.smText}>Analytics</Text>
          <Text style={styles.smText}>Daily Catchups</Text>
          <Text style={styles.smText}>Leaderboards</Text>
        </View>
        <View style={tw``}>
          <Image
            style={[styles.img, tw``]}
            source={require("../../assets/bicep.png")}
          />
        </View>
      </View>
      <View style={tw`my-4`}>
        <Text style={tw`text-xl my-2`}>Details</Text>
        <View style={tw`flex flex-row`}>
          <Icon name="calendar" style={tw`text-sm mr-4`} />
          <Text>1st Mar - 8th Mar 2021</Text>
        </View>
        <View style={tw`flex flex-row`}>
          <Icon name="tag" style={tw`text-sm mr-4`} />
          <Text> ₹ 500 paid</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text
          style={tw`bg-gray-300 text-center rounded-lg py-4 my-4 shadow-2xl`}
        >
          Extend my plan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProgramDetails;

const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 190,
    // aspectRatio: 1,
    resizeMode: "contain",
  },
  smText: {
    fontSize: 13,
  },
});
