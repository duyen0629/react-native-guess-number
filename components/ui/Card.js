import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 100,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
