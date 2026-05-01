import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";

function HabitInput({ onSubmit, onCancel, visible }) {
  const [enteredText, setEnteredText] = useState("");
  function AddHandler() {
    if (enteredText.trim()) {
      onSubmit(enteredText);
      setEnteredText("");
    }
  }
  function CancelHandler() {
    onCancel();
    setEnteredText("");
  }
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Add New Habit</Text>
          </View>

          <View style={styles.content}>
            <TextInput
              style={styles.input}
              placeholder="Enter habit name..."
              placeholderTextColor="#9ca3af"
              value={enteredText}
              onChangeText={setEnteredText}
              autoFocus
              maxLength={50}
            />

            <View style={styles.buttonGroup}>
              <Pressable
                style={[styles.button, styles.addButton]}
                onPress={AddHandler}
              >
                <Text style={styles.buttonText}>Add Habit</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={CancelHandler}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 32,
    paddingBottom: 48,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2937",
  },
  content: {
    gap: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "500",
  },
  buttonGroup: {
    gap: 12,
    marginTop: 8,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "#6366f1",
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  cancelButton: {
    backgroundColor: "#f3f4f6",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6b7280",
  },
});

export default HabitInput;
