import { useRef, useCallback } from "react";
import { Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { deleteTransaction } from "../utils/util";
import styles from '../styles/transaction.style';
import Button from "./Button";

export default function Transaction(props) {
  const { data, index, refreshing, onRefresh } = props;
  const { title, type, date, amount } = data;
  const ref = useRef(null);
  const polarizedAmount = `${amount > 0 ? '+' : '-'}${Math.abs(amount)} HKD`;
  const confirmDeleteTransaction = useCallback(() => {
    deleteTransaction(index);
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
  // Close the swipe tab whenever refresh
  if(refreshing) ref.current?.close();
  
  return (
    <Swipeable 
      renderRightActions={renderRightActions}
      overshootRight={false}
      ref={ref}
    >
      <View style={styles.transaction}>
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
      </View>
    </Swipeable>
  );
};