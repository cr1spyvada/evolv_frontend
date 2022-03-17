import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dimensions } from "react-native";
import ScalableText from "react-native-text";
const { width } = Dimensions.get("window");

const scale = width / 360;

const ProgramDetails = () => {
  return (
    <View
      entering={FadeIn.delay(800).duration(1500)}
      style={[tw`flex pt-2 justify-around mx-8`, { height: "100%" }]}
    >
      <View style={tw`flex-2 my-2 flex justify-center`}>
        <ScalableText style={[tw`font-bold text-base`]}>
          About the Program
        </ScalableText>
      </View>
      <View style={tw`flex-10  flex-row justify-between`}>
        <View style={tw`flex-2 flex justify-center `}>
          <ScalableText style={tw`text-xs`}>Personalized Workouts</ScalableText>
          <ScalableText style={tw`text-xs`}>
            Personalized Meal Plans{" "}
          </ScalableText>
          <ScalableText style={tw`text-xs`}>Analytics</ScalableText>
          <ScalableText style={tw`text-xs`}>Daily Catchups</ScalableText>
          <ScalableText style={tw`text-xs`}>Leaderboards</ScalableText>
        </View>
        <View style={tw`flex-1`}>
          <Image
            style={[styles.img, tw`h-full`]}
            source={require("../../assets/bicep.png")}
          />
        </View>
      </View>
      <View style={tw` flex-6 flex justify-center my-2`}>
        <ScalableText style={[tw`text-base font-bold`, {}]}>
          Details
        </ScalableText>
        <View style={tw`flex flex-row`}>
          <Icon name="calendar" style={tw`text-xs mr-4`} />
          <ScalableText style={tw`text-xs`}>
            1st Mar - 8th Mar 2021
          </ScalableText>
        </View>
        <View style={tw`flex flex-row`}>
          <Icon name="tag" style={tw`text-sm mr-4`} />
          <ScalableText style={tw`text-xs`}> ₹ 500 paid</ScalableText>
        </View>
      </View>
      <TouchableOpacity style={tw`flex-3 flex justify-center`}>
        <View
          style={tw`bg-gray-300 flex-1 flex  items-center justify-center text-center rounded-lg shadow-2xl`}
        >
          <ScalableText style={tw`text-base`}>Extend my plan</ScalableText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProgramDetails;

const styles = StyleSheet.create({
  img: {
    width: 130 * scale,
    height: 190 * scale,
    // aspectRatio: 1,
    resizeMode: "contain",
  },
});
