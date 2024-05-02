import { Platform, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor:'#111',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height:95,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android'? 10 : 30,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  titleHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  }
})