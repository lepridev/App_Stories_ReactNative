import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants";
const styles = StyleSheet.create({
  acompteContainer: {
    backgroundColor: COLORS.lightWhite,
    flex: 1,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 3,
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  formContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  formTitleContainer: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.blue,
    fontWeight: "500",
  },
  formInputContainer: {
    flex: 2,
    alignItems: "center",
    gap: 10,
  },
  bouttons: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 5,
  },
  bouttonsOutline: {
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: COLORS.blue,
    borderWidth: 1,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  textOutline: {
    color: COLORS.blue,
    fontWeight: "bold",
  },
});

export default styles;
