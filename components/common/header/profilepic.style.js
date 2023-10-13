import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 120,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: COLORS.lightWhite,
    padding: 5,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  image: {
    width: 80,
    height: 80,
    objectFit: "scale-down",
  },
});

export default styles;
