import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
  backgroundColor: '#111',
  flex: 1, 
  flexDirection: 'row',  
 
   
    
  
   
  },
  content: {
   
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  emptyAre: {
    width: '110%',
    marginLeft: 20,
    
    alignItems: 'center',
    justifyContent: 'center',
   
    flexDirection: 'row',
  
     
   
    borderRadius: 5
    
  },
  img: {
    marginBottom: 30
  },
  title: {
    color: "#808080",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 14,
  },
  subTitle: {
    color: "#808080",
    marginBottom: 20,
    fontSize: 14,
  },
})