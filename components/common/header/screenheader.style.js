import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xLarge / 2,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 5,
  }),
});

export default styles;
