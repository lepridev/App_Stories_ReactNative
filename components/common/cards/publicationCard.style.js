import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    gap: 8,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
    height: 200,
    backgroundColor: COLORS.gray2,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  descriptionContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titleDescContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    paddingLeft: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: SIZES.small,
    color: "#27374D",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
  },
});

export default styles;
