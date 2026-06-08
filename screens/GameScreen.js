import { View, Text, Button, StyleSheet } from "react-native";
import Title from "../components/Title";
function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <Button title="Higher" onPress={() => {}} />
          <Button title="Lower" onPress={() => {}} />
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
