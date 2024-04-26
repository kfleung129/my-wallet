import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    gap: 20,
  },
  inputWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '5%',
    gap: 16
  },
  input: {
    display: 'flex',
    height: '7%', 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
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
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  addBtn: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  addBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  header: {
    width: '100%',
  },
  picture: {
    alignSelf: 'center',
    width: 250,
    height: 250
  },
  polarityBtn: {
    display: 'flex',
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: 'center'
  },
  polarityBtnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    inputIOS: {
      minWidth: '75%',
      backgroundColor: '#FFFFFF',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 20,
    },
    inputAndroid: {
      width: '75%',
      backgroundColor: '#FFFFFF',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 20,
    }
  }
});
