import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/transactionScreen.style';
import Button from './Button';
import { addTransaction, editTransaction, dateToString, stringToDate } from '../utils/util';
import transactionTypeList from '../assets/type.json';

export default function TransactionScreen(props) {
  const { route } = props;
  const { params } = route;
  const [title, setTitle] = useState(params?.transaction?.title ?? '');
  const [type, setType] = useState(params?.transaction?.type ?? '');
  const [date, setDate] = useState(stringToDate(params?.transaction?.date) ?? new Date()); 
  const [amount, setAmount] = useState(Math.abs(params?.transaction?.amount) ? Math.abs(params?.transaction?.amount).toString() : '');
  const [polarity, setPolarity] = useState((params?.transaction?.amount > 0 ?  '+' : '-') ?? '-');
  const navigation = useNavigation();
  const isPositive = (polarity === '+');
  const buttonText = params.method === 'add' ? 'Add' : 'Done';

  const confirmTransaction = async () => {
    const newTransaction = {
      title: title,
      type: type,
      date: dateToString(date),
      amount: (isPositive ? amount : -amount)
    };

    const method = route.params?.method ?? 'add';
    const index = route.params?.index;
    if(method === 'add') {
      res = await addTransaction(newTransaction);
    } else if(method === 'edit') {
      res = await editTransaction(newTransaction, index);
    }
    if(!res) return;
    navigation.navigate("HomeScreen", { reload: true })
  }

  return (
    <KeyboardAwareScrollView extraScrollHeight={15}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.picture}
            source={require('../assets/saving.png')}
          />
        </View>
        <View style={styles.inputWrapper}>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Date: </Text>
            <DateTimePicker
              mode="date"
              value={date}
              onChange={(e, newDate) => setDate(newDate)}
              display="compact"
              maximumDate={new Date()}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Title: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setTitle}
              value={title}
              placeholder="..."
            />
          </SafeAreaView>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Type: </Text>
            <RNPickerSelect
              onValueChange={setType}
              value={type}
              style={styles.picker}
              items={transactionTypeList}
              maximumDate={new Date()}
              placeholder={{
                label: '...',
            }}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Amount: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setAmount}
              value={amount}
              placeholder="..."
              keyboardType="numeric"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.buttons}>
            <Button 
              text={polarity}
              handler={() => setPolarity(isPositive ? '-' : '+')}
              btnStyle={[styles.polarityBtn, { backgroundColor: isPositive ? '#0F9D58' : '#EA4335' }]}
              textStyle={styles.polarityBtnText}
            />
            <Button 
              text={buttonText}
              handler={confirmTransaction}
              btnStyle={styles.addBtn}
              textStyle={styles.addBtnText}
            />
          </SafeAreaView>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}; 