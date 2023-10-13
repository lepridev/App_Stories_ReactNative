import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 5,
    padding: 4,
    marginTop: 20,
  },
  inputContainer: {
    flex: 5,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    backgroundColor: COLORS.gray,
    borderRadius: 4,
  },
  textInput: {
    paddingHorizontal: 5,
  },
  image: {
    height: 30,
    objectFit: "contain",
  },
});

export default styles;
