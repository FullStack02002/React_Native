import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppDispatch } from '../redux/hooks'
import { deleteTodo, Todo, toggleTodo } from '../redux/todoSlice'

const TodoItem = ({ item }: { item: Todo }) => {
    const dispatch = useAppDispatch();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                <Text style={[styles.text,item.completed && styles.completed]}>
                    {item.text}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch(deleteTodo(item.id))}>
                <Text>❌</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
    },
    text: { fontSize: 16 },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});