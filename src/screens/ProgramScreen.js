import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import ProgramCard from "../components/programCard";
import DropShadow from "react-native-drop-shadow";
import Animated, {
  SlideOutDown,
  FadeIn,
  withTiming,
} from "react-native-reanimated";
import ProgramDetails from "../components/programDetails";
import { Dimensions } from "react-native";
import ScalableText from "react-native-text";
const { width } = Dimensions.get("window");

const scale = width / 360;

const ProgramScreen = ({ navigation, route }) => {
  const entering = (target) => {
    "worklet";
    // console.log(route, " dimension");
    // console.log(target, "height");
    const animations = {
      originY: withTiming(target.targetOriginY, {
        duration: 1000,
      }),
    };
    const initialValues = {
      originY: route.params.dim,
    };
    return { animations, initialValues };
  };
  return (
    <Animated.View
      entering={FadeIn.duration(1000)}
      exiting={SlideOutDown.duration(5000)}
      style={[tw`flex flex-col justify-start h-full`]}
    >
      <View
        style={[
          tw`w-full flex flex-row bg-gray-300 justify-start items-center px-4 py-2 pt-10`,
          { height: "15%" },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={tw`w-1/5 ml-2`}
        >
          <Icon style={tw`text-3xl `} name="angle-left" />
        </TouchableOpacity>
        <ScalableText style={tw`text-lg font-bold pb-0`}>
          My Program
        </ScalableText>
      </View>
      <Animated.View
        entering={entering}
        // entering={SlideInDown.duration(1500)}
        style={[tw`flex `, { height: "85%" }]}
      >
        <View style={[tw`flex bg-gray-300 rounded-b-2xl`, { height: "25%" }]}>
          <ProgramCard />
        </View>
        <Animated.View
          entering={FadeIn.delay(800)}
          style={[tw``, { height: "70%" }]}
        >
          <ProgramDetails />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default ProgramScreen;
