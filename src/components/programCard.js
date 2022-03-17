import { View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";
import { Dimensions } from "react-native";
import ScalableText from "react-native-text";
const { width } = Dimensions.get("window");

const scale = width / 360;

const ProgramCard = (props) => {
  return (
    <View style={tw`flex flex-col mx-8 my-2 bg-gray-300`}>
      <View style={tw`flex flex-row items-center mb-1`}>
        <Icon name="code" style={tw`text-base`} />
        <ScalableText style={tw`px-3 font-bold text-base`}>
          Program
        </ScalableText>
      </View>
      <View style={tw`flex flex-row items-center  justify-between`}>
        <View style={tw` flex justify-center`}>
          {/* <View style={tw`justify-end`}> */}
          <ScalableText style={tw`font-bold `}>7 Day Challenge</ScalableText>
          <ScalableText style={[tw` text-gray-700 text-sm`, {}]}>
            Get Strong
          </ScalableText>
          {props.summaryText !== null && (
            <ScalableText style={[tw`  text-gray-700 text-xs`]}>
              {props.summaryText}
            </ScalableText>
          )}
          {/* </View> */}
        </View>
        <AnimatedCircularProgress
          style={tw``}
          size={75 * scale}
          width={6 * scale}
          fill={55}
          rotation={180}
          lineCap="round"
          renderCap={({ center }) => (
            <Circle cx={center.x} cy={center.y} r={1.5 * scale} fill="white" />
          )}
          tintColor="#592CB8"
          backgroundColor="#CEBFEE"
        >
          {(fill) => (
            <View style={tw``}>
              <View style={tw`flex justify-center flex-row`}>
                <ScalableText style={tw`font-bold text-xs text-gray-700`}>
                  5
                </ScalableText>
                <ScalableText
                  style={[tw`font-bold text-gray-700`, styles.smText]}
                >
                  th
                </ScalableText>
              </View>

              <ScalableText style={tw`font-bold text-xs text-gray-700`}>
                Day
              </ScalableText>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default ProgramCard;
const styles = StyleSheet.create({
  smText: {
    fontSize: 8 * scale,
  },
});
