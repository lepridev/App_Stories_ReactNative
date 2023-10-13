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
    height: 250,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: "70%",
    objectFit: "cover",
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
    gap: 8,
  },

  input: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontSize: 16,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 7,
  },
  inputLabel: {
    textAlign: "left",
  },
  button: {
    alignItems: "center",

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
