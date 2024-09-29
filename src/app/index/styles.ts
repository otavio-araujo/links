import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 32,
  },
  logo: {
    width: 32,
    height: 38,
  },
})
