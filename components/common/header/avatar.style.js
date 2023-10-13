import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 120,
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: COLORS.white,
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
  titleContainer: {
    justifyContent: "center",
    width: "100%",
    gap: 5,
    marginTop: 5,
  },
  title: {
    textAlign: "center",
    fontSize: SIZES.small,
    fontWeight: "500",
  },
  btnContainer: {
    width: "60%",
    backgroundColor: "red",
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 10,
  },
  btnTitle: {
    textAlign: "center",
    fontSize: SIZES.small,
    color: COLORS.lightWhite,
  },
});

export default styles;
