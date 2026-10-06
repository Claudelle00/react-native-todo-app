## React Native Basics

### What is React Native?

React Native is a framework for creating mobile applications using React, JavaScript, or TypeScript. It allows developers to create applications for platforms such as Android and iOS while sharing much of the application code between platforms.

React Native applications are built using components. Components are reusable parts of the user interface, such as buttons, text fields, lists, and screens.

### Components

A React Native application is made from components.

For example:

```tsx
function Welcome() {
  return (
    <View>
      <Text>Hello React Native!</Text>
    </View>
  );
}
```

`View` is commonly used as a container, while `Text` displays text.

Components make applications easier to organize and reuse.

### JSX

React Native uses JSX to describe the user interface.

For example:

```tsx
<Text>My To-Do List</Text>
```

JSX looks similar to HTML, but React Native uses components designed for mobile applications.

### State

State is data that can change while the application is running.

In the To-Do application, state is used to store the current task and the list of To-Do items.

```tsx
const [task, setTask] = useState('');
const [todos, setTodos] = useState<Todo[]>([]);
```

`task` contains the current text entered by the user.

`todos` contains the list of tasks.

The `setTask` and `setTodos` functions are used to update the state.

When state changes, React Native updates the user interface.

### Props

Props are values passed from one component to another.

They allow components to receive information from their parent component.

For example:

```tsx
<MyButton title="Add task" />
```

The `title` is a prop passed to the component.

Props are useful when creating reusable components.

### Hooks

React Hooks provide functionality that can be used inside functional components.

One important Hook is `useState`.

Another commonly used Hook is `useEffect`, which can be used to perform actions when a component is rendered or when data changes.

Example:

```tsx
const [count, setCount] = useState(0);
```

### Text Input

React Native provides `TextInput` for entering text.

In the To-Do application:

```tsx
<TextInput
  placeholder="Enter a task..."
  value={task}
  onChangeText={setTask}
/>
```

The `value` is connected to the application's state, and `onChangeText` updates the state when the user types.



When the user presses the button, the `addTodo` function is executed.

### Lists

The To-Do application uses `FlatList` to display the tasks.

```tsx
<FlatList
  data={todos}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Text>{item.title}</Text>
  )}
/>
```

`FlatList` is designed for displaying lists efficiently.

The `data` property contains the items and `renderItem` determines how each item is displayed.

### Conditional Styling

The application changes the appearance of completed tasks.

```tsx
<Text
  style={[
    styles.todoText,
    item.completed && styles.completedText,
  ]}
>
  {item.title}
</Text>
```

When `completed` is true, the completed style is applied.

This makes completed tasks appear crossed out.

### Styling

React Native uses `StyleSheet` to define styles.

For example:

```tsx
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
```

React Native styling is similar to CSS, but it uses JavaScript or TypeScript objects and React Native-specific properties.

### Data Flow in the To-Do Application

The basic flow of the application is:

1. The user enters a task.
2. The text is stored in state.
3. The user presses the Add button.
4. A new To-Do object is created.
5. The To-Do is added to the list.
6. `FlatList` displays the updated list.
7. The user can mark the task as completed or delete it.

This project demonstrates how React Native components, state, user input, events, lists, and styling can be combined to create a functional mobile application.
