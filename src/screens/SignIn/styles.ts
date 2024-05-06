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
    marginTop: 10,
    
    
    
    
  },
  input:{
    backgroundColor: '#222',
    color: '#fff',
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
  },
  socialArea: {
    marginTop: 20,
    
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  socialContent:{
    padding: 10,
    height: 50,
  
    gap: 50,  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  footerContainer:{
    marginVertical: '10%',
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',  
    marginLeft: 20, 
   

  },
  footerContent: {
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    gap: 10,
    padding: 20
  }
})