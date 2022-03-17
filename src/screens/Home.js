import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import ProgramCard from "../components/programCard";
import Animated, { SlideOutDown, SlideInUp } from "react-native-reanimated";
import { Dimensions } from "react-native";
import ScalableText from "react-native-text";
const { width } = Dimensions.get("window");

const scale = width / 360;

const HomeScreen = ({ navigation }) => {
  let dim;
  return (
    <Animated.View
      entering={SlideInUp.duration(1000)}
      exiting={SlideOutDown.duration(1000)}
      style={[tw`flex flex-1 justify-center items-center`]}
    >
      <TouchableOpacity
        onLayout={(event) => {
          dim = event.nativeEvent.layout.y;
          console.log(event.nativeEvent.layout, "testing");
        }}
        onPress={() => {
          navigation.navigate("ProgramScreen", { dim });
        }}
        style={tw`w-11/12 rounded-lg bg-gray-300 shadow-2xl`}
      >
        <ProgramCard summaryText={"Push Pull Leg Cycle"} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default HomeScreen;
