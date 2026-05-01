import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import HabitItem from "./components/HabitItem";
import HabitInput from "./components/HabitInput";

function App() {
  const [habits, setHabits] = useState([]);
  const [modalVisable, setModalVisable] = useState(false);

  function toggleHabit(id) {
    setHabits((currentHabits) =>
      currentHabits.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function openModal() {
    setModalVisable(true);
  }
  function closeModal() {
    setModalVisable(false);
  }

  function addNewHabit(text) {
    setHabits((currentHabits) => [
      ...currentHabits,
      {
        id: Math.random().toString(36).substring(2),
        text: text,
        checked: false,
      },
    ]);
    closeModal();
  }

  function deleteHabit(id) {
    setHabits((currentHabits) =>
      currentHabits.filter((item) => item.id !== id),
    );
  }

  function deleteAllHabbits() {
    setHabits([]);
  }
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "20%",
          resizeMode: "contain",
          marginBottom: 10,
          borderRadius: 16,
          opacity: 0.7,
        }}
        source={require("./assets/Healthy_Habits.png")}
      />

      <FlatList
        style={{ width: "100%", flex: 1 }}
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitItem
            text={item.text}
            onPress={() => toggleHabit(item.id)}
            onLongPress={() => deleteHabit(item.id)}
            checked={item.checked}
          />
        )}
        contentContainerStyle={{ paddingBottom: 12 }}
      />

      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.addButton]}
          onPress={openModal}
        >
          <Text style={styles.buttonText}>Add Habit</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.deleteButton]}
          onPress={deleteAllHabbits}
        >
          <Text style={styles.buttonText}>Delete All</Text>
        </Pressable>
      </View>
      <HabitInput
        onSubmit={addNewHabit}
        onCancel={closeModal}
        visible={modalVisable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3d9ff",
    paddingTop: 50,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 32,
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButton: {
    backgroundColor: "#6366f1",
  },
  deleteButton: {
    backgroundColor: "#ef4444",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    letterSpacing: 0.5,
  },
});

export default App;
