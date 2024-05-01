import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    padding: '5%',
    gap: 10,
    height: '92%',
  },  
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  search: {
    width: '70%',
    height: 38,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  addBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  addBtnText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    opacity: 0.6
  },
  picture: {
    width: 300,
    height: 300,
    marginTop: '30%'
  }
});