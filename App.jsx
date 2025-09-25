import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { viewStyles, textStyles } from "./src/styles";

export default function App() {
  return (
    <View style={viewStyles.container}>
      {/* Header */}
      <View style={viewStyles.header}>
        <Text style={textStyles.text}>Header</Text>
      </View>
      {/* Contents */}
      <View style={viewStyles.contents}>
        <View style={viewStyles.contentsLeft}>
          <Text style={textStyles.text}>Contents Left</Text>
        </View>
        <View style={viewStyles.contentsRight}>
          <Text style={textStyles.text}>Contents Right</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={viewStyles.footer}>
        <Text style={textStyles.text}>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
