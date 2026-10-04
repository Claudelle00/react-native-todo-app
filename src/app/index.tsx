import { useState } from 'react';
import {
  FlatList,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    const trimmedTask = task.trim();

    if (trimmedTask === '') {
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: trimmedTask,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
    setTask('');
  }

  function toggleTodo(id: string) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={task}
          onChangeText={setTask}
        />

        <Button title="Add" onPress={addTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No tasks yet. Add your first task!
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Button
              title={item.completed ? `✓ ${item.title}` : `○ ${item.title}`}
              onPress={() => toggleTodo(item.id)}
            />

            <Button
              title="Delete"
              color="#d00"
              onPress={() => deleteTodo(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  addButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    paddingHorizontal: 18,
    justifyContent: 'center',
    borderRadius: 8,
  },

  addButtonPressed: {
    opacity: 0.8,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },

  todoTextContainer: {
    flex: 1,
    paddingVertical: 4,
    borderRadius: 6,
  },

  todoTextPressed: {
    opacity: 0.7,
  },

  todoText: {
    fontSize: 18,
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },

  deleteButton: {
    padding: 8,
    borderRadius: 6,
  },

  deleteButtonPressed: {
    opacity: 0.7,
  },

  deleteText: {
    color: '#d00',
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
    fontSize: 16,
  },
});