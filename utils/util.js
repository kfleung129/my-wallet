import AsyncStorage from '@react-native-async-storage/async-storage';

function isNull(item) {
  return (item === '' || item === null || item === undefined);
}

export function searchFilter(dataList, searchKeyword) {
  if (!dataList || dataList.length === 0) return [];
  searchKeyword = searchKeyword.toLowerCase();
  dataList = dataList.filter(item => (
    searchKeyword === '' || item?.title?.toLowerCase().includes(searchKeyword)
  ));
  return dataList;
}

export function dateToString(date) {
  if(isNull(date)) return '';
  const year = date.getFullYear();
  const month =  date.getMonth() + 1;
  const day = date.getDate() - 1;
  const dateStr = `${year}/${month}/${day}`;
  return dateStr;
}

export async function addTransaction(data) {
  try {
    let jsonTransactions = await getTransactions();
    let transactions = JSON.parse(jsonTransactions);
    transactions.unshift(data);
    transactions = JSON.stringify(transactions);
    await AsyncStorage.setItem(
      '@Transaction:list',
      transactions
    );
    
  } catch (error) {
    console.error(error);
  }
}

export async function getTransactions() {
  try {
    let transactions = await AsyncStorage.getItem('@Transaction:list');
    if(isNull(transactions)) {
      transactions = await AsyncStorage.setItem('@Transaction:list', '[]');
    }
    return transactions;

  } catch (error) {
    console.error(error);
  }
}

export async function getTransactionList() {
  try {
    let transactionList = await getTransactions();
    transactionList = JSON.parse(transactionList);
    return transactionList;

  } catch (error) {
    console.error(error);
  }
}

export async function resetTransactions() {
  try {
    await AsyncStorage.setItem('@Transaction:list', '[]');

  } catch (error) {
    console.error(error);
  }
}