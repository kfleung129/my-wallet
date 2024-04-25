import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,
    height: '100%',
    borderRadius: 12,
  },
  transaction: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  info: {
    width: '60%',
    gap: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8%',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  typeTag: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: 'lightgreen',
    borderRadius: 4
  },
  total: {
    width: 'auto',
    padding: '3%',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  },
});
