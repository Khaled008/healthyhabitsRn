import { Text, StyleSheet, Pressable, View } from "react-native";
import React from "react";

function HabitItem({ text, checked, onPress, onLongPress }) {
  return (
    <Pressable
      delayLongPress={300}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.container, checked && styles.containerChecked]}
    >
      <View style={styles.content}>
        <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
          {checked && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text
          style={[styles.textStyle, checked && styles.textChecked]}
          numberOfLines={1}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#e5e7eb",
  },
  containerChecked: {
    backgroundColor: "#f0f4ff",
    borderLeftColor: "#6366f1",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#d1d5db",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: "#6366f1",
    borderColor: "#6366f1",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  textStyle: {
    color: "#1f2937",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  textChecked: {
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },
});

export default HabitItem;
