import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


import React, { useState } from "react";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <View style={styles.container}>

      {/* Greeting */}
      <Text style={styles.greeting}>Good evening,</Text>
      <Text style={styles.subGreeting}>how are you feeling?</Text>

      {/* Mood Row */}
      <View style={styles.moodRow}>
        <Mood
  icon="moon-outline"
  label="Calm"
  onPress={() => setSelectedMood("Calm")}
  selectedMood={selectedMood}
/>

<Mood
  icon="cloud-outline"
  label="Anxious"
  onPress={() => router.push("/support")}
  selectedMood={selectedMood}
/>

<Mood
  icon="cafe-outline"
  label="Low"
  onPress={() => router.push("/low")}
  selectedMood={selectedMood}
/>


<Mood
  icon="flash-outline"
  label="Energetic"
  onPress={() => router.push("/(tabs)/calm")}
  selectedMood={selectedMood}
/>

      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardText}>
          A quiet moment just for you.
        </Text>
      </View>

      {/* Quote */}
      <Text style={styles.quote}>
        "Step outside for a moment"
      </Text>

      {/* Ready Button */}
      <TouchableOpacity
        style={styles.readyButton}
        onPress={() => router.push("/(tabs)/calm")}
      >
        <Text style={styles.readyText}>I'm ready →</Text>
      </TouchableOpacity>

      {/* Panic Button */}
      <TouchableOpacity
        style={styles.panicButton}
        onPress={() => router.push("/panic")}
      >
        <Text style={styles.panicText}>Panic attack</Text>
      </TouchableOpacity>

    </View>
  );
}

/* Mood Button */

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

type MoodProps = {
  icon: IoniconName;
  label: string;
  onPress: () => void;
  selectedMood: string | null;
};

function Mood({ icon, label, onPress, selectedMood }: MoodProps) {
  return (
    <TouchableOpacity
      style={styles.moodItem}
      onPress={onPress}
    >
      <View
        style={[
          styles.moodIcon,
          selectedMood === label && styles.moodIconActive,
        ]}
      >
        <Ionicons name={icon} size={30} color="#3f5d4e" />
      </View>
      <Text style={styles.moodLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

/* Styles */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f7ec",
    paddingTop: 80,
    paddingHorizontal: 24,
  },

  greeting: {
    fontSize: 28,
    fontWeight: "600",
  },

  subGreeting: {
    fontSize: 28,
    color: "#777",
    marginBottom: 40,
  },

  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  moodItem: {
    alignItems: "center",
  },
moodIcon: {
  backgroundColor: "rgba(255,255,255,0.6)",
  width: 74,
  height: 74,
  borderRadius: 37,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
},

moodIconActive: {
  backgroundColor: "#ffffff",
  borderWidth: 2,
  borderColor: "#4f8f6a",
},

  moodLabel: {
    fontSize: 13,
    color: "#666",
  },

  card: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 22,
    marginBottom: 40,
  },

  cardText: {
    fontSize: 16,
  },

  quote: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#555",
    marginBottom: 30,
  },

  readyButton: {
    backgroundColor: "#4f8f6a",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  readyText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  panicButton: {
  marginTop: 18,
  width: 120,
  height: 120,
  borderRadius: 60,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(254, 0, 0, 0.88)",
  borderWidth: 1,
  borderColor: "#b5cbb7",
  alignSelf: "center",
},
panicText: {
  fontSize: 16,
  color: "#fcf9f9ff",
  fontWeight: "600",
},
});
