import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'column',
    
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    borderRadius: 10,
    
    marginRight: 20
  },
  listContent:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    borderRadius: 10,
  },
  newLatterImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  newLatterText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})