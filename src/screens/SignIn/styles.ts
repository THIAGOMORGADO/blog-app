import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
    flex: 1,
  },
  formArea: {
    
    height: '40%', 
    flexDirection: 'row', 
    width: '100%', 
    
  },
  formContent: {
    marginLeft: 20,
    
    
    
  },
  input:{
    backgroundColor: '#222',
    
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: "#00f000",
    borderWidth: 2,
    paddingLeft: 15

  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  title: {
    color: '#fff',
    marginTop: 5,
    marginBottom: 5
  }
})