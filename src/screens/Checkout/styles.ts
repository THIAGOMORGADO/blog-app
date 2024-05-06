import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  content: {
    marginTop: 100,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    
    justifyContent: 'center'
  },
  textCheck: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform:  'uppercase',
  },
  btnCard: {

   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: 50,
   marginBottom: 50,
   
   gap: 15,
   borderRadius: 10,
   borderColor: "#00f000",
   borderWidth: 1,
  
  }
})