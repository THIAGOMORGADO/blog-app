import { Platform, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor:'#111',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height: '35%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  titleHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  }
})