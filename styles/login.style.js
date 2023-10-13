import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  imageContainer: {
    height: 400,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    objectFit: "scale-down",
  },

  formTitleContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.blue,
    fontWeight: "500",
  },
  formInputContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    gap: 10,
  },

  input: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontSize: 16,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 7,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 7,
    marginTop: 15,
  },
  texte: {
    color: COLORS.lightWhite,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default styles;
