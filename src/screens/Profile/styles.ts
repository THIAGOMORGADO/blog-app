import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userInfo: {
    
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  userImage: {
    backgroundColor: 'red',
    
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#0ff00f',
    borderWidth: 4,
    flexDirection: 'column',
    marginBottom: 15,
    
  },
 
  userArea: {
    paddingTop: "10%",
    
   alignItems: 'center',
   justifyContent: 'flex-start',
  
   flexDirection: 'column',

  },
  photoArea: {
    paddingTop: "0%"
  
  },
  userText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  skilsContainer: {
    marginTop: 20,
    marginLeft: 20
  },
  skilsArea: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20
  },
  skillsWarpper: {
    
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})