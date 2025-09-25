## 크로스플랫폼프로그래밍

- 크로스 플랫폼 실습입니다.

### 3일차 (9월 25일)

```
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
```

- styles.js

```
import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#f1c40f",
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    flex: 2,
    flexDirection: "row",
  },
  contentsLeft: {
    flex: 1,
    backgroundColor: "#16a085",
    alignItems: "center",
    justifyContent: "center",
  },
  contentsRight: {
    flex: 1,
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const textStyles = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
```
