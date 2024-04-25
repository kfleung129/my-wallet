import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '5%',
    gap: 15
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: '20%',
    alignSelf: 'center'
  },
  textInput: {
    width: '75%',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  addBtn: {
    alignSelf: 'center',
    backgroundColor: '#4285F4',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 30,
  },
  addBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  picture: {
    alignSelf: 'center',
    width: 300,
    height: 300
  }
});
