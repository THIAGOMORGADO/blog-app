import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imgLogo: {
    width: '50%',
    height: '25%',
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 160,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 25
  }
})