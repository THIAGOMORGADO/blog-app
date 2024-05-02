import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    marginLeft: 20,
    width: 120,
    height: 120,
    borderRadius: 10,
    borderColor: "#00f000",
    borderWidth: 2,
    marginBottom: 20,
    
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 12,
    flex: 1,
  },
  techIm: {
    width: 50,
    height: 50,
    borderRadius: 25,
   
    
  },
  textTech: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    
  }
})