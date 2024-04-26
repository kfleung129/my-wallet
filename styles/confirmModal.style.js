import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  button: {
    borderRadius: 20,
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 2,
  },
  buttonYes: {
    backgroundColor: '#2196F3',
  },
  buttonNo: {
    backgroundColor: '#DB4437'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 10,
    paddingBottom: 15,
    fontSize: 18,
  },
});