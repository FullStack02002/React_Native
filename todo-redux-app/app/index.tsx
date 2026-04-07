import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import TodoItem from '../src/components/TodoItem';
import { useAppDispatch, useAppSelector } from '../src/redux/hooks';
import { addTodo, Todo } from '../src/redux/todoSlice';

export default function Home() {
  const [text, setText] = useState('');
  const todos = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter task..."
        value={text}
        onChangeText={setText}
      />

      <Button title="Add Todo" onPress={handleAdd} />

      <FlatList<Todo>
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});