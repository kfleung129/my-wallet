import { useRef, useCallback } from "react";
import { Text, View, Pressable } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { deleteTransaction } from "../utils/util";
import styles from '../styles/transaction.style';
import Button from "./Button";

export default function Transaction(props) {
  const { data, index, onRefresh, refreshing } = props;
  const { title, type, date, amount } = data;
  const ref = useRef(null);
  const navigation = useNavigation();
  const polarizedAmount = `${amount > 0 ? '+' : '-'}${Math.abs(amount)} HKD`;
  
  const confirmDeleteTransaction = useCallback(async () => {
    await deleteTransaction(index);
  }, []);

  const renderRightActions = (progress, dragX) => {
    return (
      <Button 
        text="X"
        handler={async () => {
          await confirmDeleteTransaction();
          onRefresh();
        }}
        btnStyle={styles.swipeDelete}
        textStyle={styles.swipeDeleteText}
      />
    );
  };
  const onPress = () => navigation.navigate("Transaction", { method: "edit", transaction: data, index: index });
  // Close the swipe tab whenever refresh
  if(refreshing) ref.current?.close();
  
  return (
    <Swipeable 
      renderRightActions={renderRightActions}
      overshootRight={false}
      ref={ref}
    >
      <Pressable style={styles.transaction} onPress={onPress}>
        <View style={styles.info}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.typeTag}>
              <Text style={styles.type}>{type}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
        <View style={styles.total}>
          <Text style={{ ...styles.amount, ...(amount > 0 ? styles.positive : styles.negative) }}>
            {polarizedAmount}
            </Text>
        </View>
      </Pressable>
    </Swipeable>
  );
};