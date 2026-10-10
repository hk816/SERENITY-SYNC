import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen() {
  const [mood, setMood] = useState(null);

  const moods = [
    { label: "😊 Happy", value: "happy" },
    { label: "😐 Neutral", value: "neutral" },
    { label: "😔 Stressed", value: "stressed" },
    { label: "😴 Tired", value: "tired" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🌿 Nature Wellness</Text>

      <Text style={styles.greeting}>Hey Hansika, how are you feeling today?</Text>

      <View style={styles.moodBox}>
        {moods.map((m) => (
          <TouchableOpacity
            key={m.value}
            style={[
              styles.moodButton,
              mood === m.value && styles.moodButtonSelected,
            ]}
            onPress={() => setMood(m.value)}
          >
            <Text style={styles.moodText}>{m.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.exerciseButton}>
        <Text style={styles.exerciseText}>Start Nature Exercise 🌱</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.journalButton}>
        <Text style={styles.journalText}>Open Journal ✍️</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F8F3", padding: 20 },
  header: { fontSize: 26, fontWeight: "700", marginBottom: 20, color: "#2F5D46" },
  greeting: { fontSize: 18, marginBottom: 20, color: "#3F3F3F" },
  moodBox: { flexDirection: "column", gap: 10 },
  moodButton: {
    padding: 15,
    backgroundColor: "#E0EFE5",
    borderRadius: 12,
  },
  moodButtonSelected: {
    backgroundColor: "#B6D7B7",
  },
  moodText: { fontSize: 18 },
  exerciseButton: {
    backgroundColor: "#4F8F6F",
    padding: 18,
    marginTop: 30,
    borderRadius: 14,
    alignItems: "center",
  },
  exerciseText: { color: "white", fontSize: 18 },
  journalButton: {
    backgroundColor: "#8FBF94",
    padding: 18,
    marginTop: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  journalText: { color: "white", fontSize: 18 },
});
