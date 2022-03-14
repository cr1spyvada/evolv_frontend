import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";

const ProgramCard = (props) => {
  return (
    <View style={tw`mx-8 my-4 bg-gray-300`}>
      <View style={tw`flex flex-row`}>
        <Icon name="code" style={tw`text-lg`} />
        <Text style={tw`px-3 font-bold`}>Program</Text>
      </View>
      <View style={tw`flex flex-row justify-between items-end mb-2`}>
        <View>
          <Text style={tw`font-bold`}>7 Day Challenge</Text>
          <View style={tw``}>
            <Text style={[tw`text-gray-700 `, { fontSize: 10 }]}>
              Get Strong
            </Text>
            <Text style={[tw`text-gray-700 `, { fontSize: 10 }]}>
              {props.summaryText}
            </Text>
          </View>
        </View>
        <AnimatedCircularProgress
          style={tw``}
          size={90}
          width={7}
          fill={55}
          rotation={180}
          lineCap="round"
          renderCap={({ center }) => (
            <Circle cx={center.x} cy={center.y} r="2" fill="white" />
          )}
          tintColor="#4516a5"
          backgroundColor="#d0c2ef"
        >
          {(fill) => (
            <View style={tw``}>
              <View style={tw`flex justify-center flex-row`}>
                <Text style={tw`font-bold text-gray-700`}>5</Text>
                <Text style={[[tw`font-bold text-gray-700`], { fontSize: 10 }]}>
                  th
                </Text>
              </View>

              <Text style={tw`font-bold text-gray-700`}>Day</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
    </View>
  );
};

export default ProgramCard;
