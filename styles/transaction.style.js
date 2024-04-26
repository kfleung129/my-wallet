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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    minHeight: 90,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  info: {
    width: '60%',
    gap: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  typeTag: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#4285F4',
    borderRadius: 10,
  },
  type: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold'
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
  date: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});
